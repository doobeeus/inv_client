import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { getLoginStatus } from "../../authService/authService";


const InvToClient = () => {
  const navigate = useNavigate();
  const verifyCookie = async (req, res) => {
    const loggedin = await getLoginStatus();
    if(loggedin == false){
      navigate("/login");
    }
  };
  verifyCookie();
  return (
    <div>
      <h1>Would you like to create a new client or use an existing client?</h1>
      <span>
            <Link to="/registerclient">Create Client</Link>
            <br></br>
            <Link to="/searchclient">View Clients</Link>
            <br></br>
          </span>
    </div> 
  );
};

export default InvToClient;