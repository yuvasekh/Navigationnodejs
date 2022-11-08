import React from "react";
import Home from './Home';
import About from './About';
import Help from './Help';
import Search from './Search';
import Mynavbar  from "./Mynavbar";
import Register from "./Register";
import Login from "./Login";
import {  Routes, Route, BrowserRouter } from "react-router-dom";
import {useNavigate} from "react-router-dom";
function Dashboard()
{
    var arr=localStorage.getItem('Employees')
  
    var res=JSON.parse(arr)
    console.log(res,'result') 
    return(
    <>
    <Mynavbar/>

    
    <h1>Welcome To Dashboard</h1>
    {
     res.map((item, index) => {
        return <p key={index}>{item.name}<br></br>{item.Email}<br></br>{item.Mobilenumber}<br></br>{item.Password}</p>;
      })}
      {/* {
        res.map((item,index)=>
        {
            <ul>
                <li key={index}>
                    {item.name}
                </li>
            </ul>
        })
      } */}
   
 
    
    
    </>)
}
export default Dashboard