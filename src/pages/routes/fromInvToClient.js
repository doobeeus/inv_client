import { useState } from "react";
import { Link } from "react-router-dom";

const InvToClient = () => {
  return (
    <div>
      <h1>Would you like to create a new client or use an existing client?</h1>
      <span>
            <Link to="/registerclient">Create Client</Link>
            <br></br>
            <Link to="/viewclient">View Clients</Link>
            <br></br>
          </span>
    </div> 
  );
};

export default InvToClient;