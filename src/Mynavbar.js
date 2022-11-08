import React from "react";
import "./App.css"
import {  Link, Outlet } from "react-router-dom";

function Mynavbar()
{
    return(
      <>
        <nav className="nav">
<div className="navboard">
    <li>
      <Link to="/home" className="home">Home</Link>
    </li>
    <li>
      <Link to="/About" className="about">About</Link>
    </li>
    <li>
      <Link to="/Search" className="search">Search</Link>
    </li>
    <li>
      <Link to="/Help" className="help">Help</Link>
    </li>
    <li>
      <Link to="/Login" className="help">Login</Link>
    </li>
    <li>
      <Link to="/Register" className="help">Register</Link>
    </li>
    <li>
      <Link to="/dashboard" className="help">Dashboard</Link>
    </li>
  </div>

  </nav>
    <Outlet/>
    </>
    )
}
export default Mynavbar