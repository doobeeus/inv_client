import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Button from 'react-bootstrap/Button';

const initialState = {
  clientName: "",
  buildingName: ""
};

const SearchInventory = () => {
  const navigate = useNavigate();
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
  const exportInv = (clientName, buildingName) => {
    const data = {clientName : clientName, buildingName: buildingName};
    navigate("/exportinv", {state: data});
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
            <Button onClick= {() => exportInv(clientName, buildingName)}> Export </Button>
            <Button onClick= {() => viewDeleteInv(clientName, buildingName)}> Edit/Delete </Button>

          </form>
        </div>
    </div>
  );
};

export default SearchInventory;