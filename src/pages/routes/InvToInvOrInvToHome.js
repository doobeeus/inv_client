import { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import { Link, useNavigate, useLocation } from "react-router-dom";

const InvToInvHome = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const prevData = location.state;
  const initialState = {
      clientName: prevData.clientName, 
      buildingName: prevData.buildingName, 
    };
    console.log(initialState);
  return (
    <div>
      <h1>Would you like to create another inventory or return home?</h1>
      <span>
            
            <Button onClick={() => {
              navigate("/createinv", {state: initialState})}}>
              Create Inventory
            </Button>
            <br></br>
            <Link to="/home">Home</Link>
            <br></br>
          </span>
    </div> 
  );
};

export default InvToInvHome;