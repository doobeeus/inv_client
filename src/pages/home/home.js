import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { logoutUser, getLoginStatus } from "../../authService/authService";
import { useCookies } from "react-cookie";
import Button from "react-bootstrap/esm/Button";
const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const verifyCookie = async (req, res) => {
      const loggedin = await getLoginStatus();
      if(loggedin == false){
        navigate("/login");
      }
    };
    verifyCookie();
  }, []);

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