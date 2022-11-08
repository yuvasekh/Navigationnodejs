import React, { useEffect, useState } from "react";
function Eff()
{
    const [a,seta]=useState("yuva");
    useEffect(()=>
    {
        console.log("updated",[a]);
    });
    function handle(){
        var name=document.getElementById('a').value;
        seta(a);
    }
    
    return(
        <>
       <form onSubmit={handle}>
        <input type="text" value="a"></input>
        <input type="submit" value="submit"></input>
       </form> 
        </>
    )
}
export default Eff;