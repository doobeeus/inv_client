import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <span>
            <Link to="/invtoclient">Create Inventory</Link>
            <br></br>
            <Link to="/viewinv">View inventories</Link>
            <br></br>
            <Link to="/searchexport">Search for Inventories to export</Link>
          </span>
    </div> 
  );
};

export default Home;