import React from "react";
import {useState} from "react";
import {  Routes, Route, BrowserRouter } from "react-router-dom";
import './App.css';
import Home from './Home';
import About from './About';
import Help from './Help';
import Search from './Search';
import Mynavbar  from "./Mynavbar";
import Eff from "./Eff"
import Register from "./Register";
import Dashboard from "./Dashboard"
import {useNavigate} from "react-router-dom";
export const getFakelogin=()=>{
    return (sessionStorage.getItem("loggedin")==="true"?true:false)
}
function Login()
{
    const [Email,setEmail]=useState("")
    const [Password,setPassword]=useState("")
    const navigate = useNavigate();
    function datastoring(e)
 {
    e.preventDefault();
    var a={Email:Email,Password:Password}
    var arr=localStorage.getItem('Employees')
    var res=JSON.parse(arr)
    console.log(res,'RESULT')
    for(var i=0;i<res.length;i++)
    {
        if(a.Email===res[i].Email && a.Password===res[i].Password)
        {
            alert('sucess');
            sessionStorage.setItem("loggedin",true)
            navigate('/dashboard')      
        }
        else
        {
            alert("failed incorrect details");
        }
       
    }
 }
    return(<div>
        <h1>Login page</h1>
        <form onSubmit={datastoring} >
        <br></br>
        <br></br>
        <br></br>
        
            
            <label>
                Enter Email
            </label>
            <input type="text" value={Email} onChange={(e)=>{setEmail(e.target.value)}} ></input>
            <br></br>
            <br></br>
            <label>
                Enter Password
            </label>
            <input type="text" value={Password} onChange={(e)=>{setPassword(e.target.value)}} ></input>
            <br></br>
            <br></br>
            
            <br></br>
            <br></br>
            <input type="submit" value="submit"></input>
        
            
        </form>
      
    </div>)
}
export default Login