import React from "react"
import {useNavigate} from "react-router-dom"
function Home()
{
    const navigate = useNavigate();
    return(
        <div className="homecolo">
        <center>

        <h1>hi Home</h1>

        <button onClick={()=>navigate(-1)}>Navigate</button>

        </center>
        </div>
    )
}
export default Home;