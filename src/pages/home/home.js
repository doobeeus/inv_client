import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { logoutUser } from "../../authService/authService";
import Button from "react-bootstrap/esm/Button";
const Home = () => {
  const navigate = useNavigate();
  const logout = async (e) => {
    logoutUser();
    navigate("/login");
  }
  return (
    <div>
      <h1>Home Page</h1>
      <span>
            <Link to="/invtoclient">Create an inventory</Link>
            <br></br>
            <Link to="/viewallinv">View all inventories</Link>
            <br></br>
            <Link to="/searchinv">Search for Inventories</Link>
            <br></br>
            <Link to="/viewallclient">View all clients</Link>
            <br></br>
            <br></br>
            <Button onClick= {() => logout()}> Logout </Button>
          </span>
    </div> 
  );
};

export default Home;