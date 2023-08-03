import React from "react";
import { AppBar, Toolbar, styled } from "@mui/material";
import { NavLink } from "react-router-dom";

const Header = styled(AppBar)`
display:flex;
justify-content: center;
align-items:center;
  background: #111111;

  opacity: 0.7;
  position: fixed;
  z-index: 1;
  box-shadow: 50px 10px 10px black;
  // position:relative;
`;
const Tabs = styled(NavLink)`
  font-size: 22px;
  
  margin-right: 20px;
  padding: 5px;
  color: #fbfbfb;
  // background-color: white;
  border-radius: 5px;
  text-decoration: none;
  // box-shadow: 50px 10px 10px white;
  &:hover {
    font-size: 25px;
    background-color: black;
    color: white;
    border-radius: 15px;
  }
  
`;
const NavBar = () => {
  return (
    
   
    <Header position="static">
      <Toolbar>
        <Tabs to="/">Home</Tabs>
        <Tabs to="/all">All tips</Tabs>
        <Tabs to="/add">Add tips</Tabs>
      </Toolbar>
    </Header> 
   
   
  );
};

export default NavBar;
