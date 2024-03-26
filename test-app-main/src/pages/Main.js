import React from "react";
import "./styles/Main.css";
import Header from "../components/Header.js";
import MobileImg from "../img/mobile.jpg"
// import Footer from "";

function Main() {

  return (
    <>
      <Header />
        <div className="word">This is Main Page</div>
        <img className="mobileimg" src={MobileImg} alt="mobileimg" />
    </>
  )
}

export default Main;
