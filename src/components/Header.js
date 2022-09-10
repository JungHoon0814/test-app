import React from "react";
import "./styles/Header.css";
import Logo from "../img/technology.png"
import { Link } from "react-router-dom";

function Header () {

  return (
    <>
      <header className="header">
        <img className="logo" src={Logo} alt="logo"/>
        <nav className="navigation">
          <ul className="nav-menu">
            <li className="nav-item">
              <Link 
                to="/"
                className="nav-link">
                서비스
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/login"
                className="nav-link">
                로그인
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/sign-up"
                className="nav-link">
                회원가입
              </Link>
            </li>
            
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header;