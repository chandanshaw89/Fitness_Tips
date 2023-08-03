import React from "react";
import "./Home.css";
import NavBar from "./NavBar.jsx";
import ShowTip from "./ShowTip";
import Logo from "./logo";
const Home = () => {
  return (
    <>
      <NavBar/>
      <section className="hero">
        <ShowTip />
      </section>
      <Logo/>
      
      
    </>
  );
};

export default Home;
