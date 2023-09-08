import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Button from 'react-bootstrap/Button';
import { getLoginStatus } from "../../authService/authService";

const initialState = {
  clientName: "",
  buildingName: ""
};

const SearchInventory = () => {
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
  const [formData, setformData] = useState(initialState);
  const { clientName, buildingName } = formData;

  const handleInputChange = (e) => {
  const { name, value } = e.target;
  setformData({ ...formData, [name]: value });
  };
    
  const queryData = {
    clientName,
    buildingName,
  };

const viewDeleteInv = (clientName, buildingName) => {
    const data = {clientName : clientName, buildingName: buildingName};
    navigate("/viewdeleteinv", {state: data});
};
    
  return (
    <div>
        <div>
          <div className="--flex-center">
          </div>
          <h2>Search inventories</h2>

          <form>
            <input
              type="clientName"
              placeholder="clientName"
              required
              name="clientName"
              value={clientName}
              onChange={handleInputChange}
            />
            <input
              type="buildingName"
              placeholder="buildingName"
              required
              name="buildingName"
              value={buildingName}
              onChange={handleInputChange}
            />
            <Button onClick= {() => viewDeleteInv(clientName, buildingName)}> Search </Button>

          </form>
        </div>
    </div>
  );
};

export default SearchInventory;