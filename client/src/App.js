import "./App.css";
import AddUser from "./components/AddTip.jsx";
import EditUser from "./components/EditTip.jsx";
import Home from "./components/Home.jsx";
import Login from "./components/login.js";
import Register from "./components/register";
import { useState } from "react";
import AllUsers from "./components/AllTips.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [user, setLoginUser] = useState({});
  const check = user && user._id;
  return (
    <Router>

      <Routes>
        <Route
          path="/"
          element={
            check ? (
              <Home setLoginUser={setLoginUser} />
            ) : (
              <Login setLoginUser={setLoginUser} />
            )
          }
        />
        <Route
          path="/add"
          element={
            check ? (
              <AddUser setLoginUser={setLoginUser} />
            ) : (
              <Login setLoginUser={setLoginUser} />
            )
          }
        />
        <Route
          path="/all"
          element={
            check ? (
              <AllUsers setLoginUser={setLoginUser} />
            ) : (
              <Login setLoginUser={setLoginUser} />
            )
          }
        />
        <Route
          path="/edit/:id"
          element={
            check ? (
              <EditUser setLoginUser={setLoginUser} />
            ) : (
              <Login setLoginUser={setLoginUser} />
            )
          }
        />
        <Route path="/login" element={<Login setLoginUser={setLoginUser} />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
