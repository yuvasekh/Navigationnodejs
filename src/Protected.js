import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import {getFakelogin} from './Login'
function Protected()
{
    const  isLoggedin=getFakelogin()
    return(isLoggedin?<Outlet/>:<Navigate to='/'/>);
}
export default Protected;