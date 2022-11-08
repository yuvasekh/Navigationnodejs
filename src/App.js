import {  Routes, Route, BrowserRouter } from "react-router-dom";
import './App.css';
import Home from './Home';
import About from './About';
import Help from './Help';
import Search from './Search';
import Mynavbar  from "./Mynavbar";
import Eff from "./Eff"
import Register from "./Register";
import { useState } from "react";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Protected from "./Protected";


function App() {

  return (
  <>
  
<BrowserRouter>
  
     <Routes>

     <Route path="/" element={<Register />} />
     <Route path="/login" element={<Login />} />
     
     <Route element={<Protected/>}>
      
         <Route path="/home"  element={<Home />}/>
          <Route path="/About" element={<About />} />
          <Route path="/Search" element={<Search />} />
          <Route path="/Help" element={<Help />} />
          <Route path="/dashboard" element={<Dashboard/>}/>
          </Route>
        
       
     </Routes>
     </BrowserRouter>  
  </>
  );
}

export default App;
