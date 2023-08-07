import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <span>
            <Link to="/registerclient">Create Client</Link>
            <Link to="/viewclient">View Clients</Link>
          </span>
    </div> 
  );
};

export default Home;