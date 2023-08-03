import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Button,
  Tab,
  styled,
} from "@mui/material";
import { useEffect, useState } from "react";
import { deleteUser, getUsers } from "../service/api";
import React from "react";
import { Link, NavLink } from "react-router-dom";


const Tabs = styled(Table)`
  margin-top: 65px;
`;
const T_R= styled(TableRow)`
   background-color:black;
   &>th {
    font-size:18px;
    color:white;
   }
`
const T_body = styled(TableRow)`
     &>td{
      font-size:23px;
     }
`

const AllUsers = () => {
  const [users, setUsers] = useState([]);
 
  useEffect(() => {
    getAllUsers();
  }, []);
  const getAllUsers = async () => {
    let res = await getUsers();
    //console.log(res);
    setUsers(res.data);
    //(users);
  };
  const deleteUserData = async (id) => {
    await deleteUser(id);
    getAllUsers();
  };
  return (
    <>
      <button id="home-btn" style={{padding:'11px'}}>
        <NavLink id="btn-text" to="/" style={{fontSize:'14px'}}>
         Home
        </NavLink>
      </button>
      <Tabs>
        <TableHead>
          <T_R>
            <TableCell>
              <h2>Id</h2>
            </TableCell>
            <TableCell>
              <h2>Tip of the day</h2>
            </TableCell>
            <TableCell></TableCell>
          </T_R>
        </TableHead>
        <TableBody>
          
          {users.map((user) => (
            <T_body key={user._id}>
              <TableCell>{user._id}</TableCell>
              <TableCell>{user.name}</TableCell>
             

              <TableCell>
                <Button
                  variant="contained"
                  component={Link}
                  to={`/edit/${user._id}`}
                >
                  Edit
                </Button>
                <Button onClick={() => deleteUserData(user._id)} style={{backgroundColor:'Red' , color:'white', marginLeft:'4px'}}>Delete</Button>
              </TableCell>
            </T_body>
            
          ))}
        </TableBody>
      </Tabs>
    </>
  );
};

export default AllUsers;
