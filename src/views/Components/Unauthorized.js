import Navbar from "components/Navbar/Navbar";
import React from "react";

const Unauthorized = ({message}) => {
    return (<>
        <Navbar color = "white" fixed ={false}/> 
        <div style={{position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
            <img width="350px"  src={require("assets/img/access-denied.jpg").default}/> 
            <h3 style={{textAlign: "center"}}>{message ? message : "Unauthorized"}</h3>
        </div> 
    </>);
};

export default Unauthorized;