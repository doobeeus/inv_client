import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { queryExportFunction } from "../../authService/authService";
import Button from 'react-bootstrap/Button';

const initialState = {
  clientName: "",
  buildingName: ""
};

const SearchExport = () => {
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
  const handleClick = (clientName, buildingName) => {
    const data = {clientName : clientName, buildingName: buildingName};
    navigate("/exportinv", {state: data});
};
    
  return (
    <div>
        <div>
          <div className="--flex-center">
          </div>
          <h2>Search inventories to export by Client Name and Building Name</h2>

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
            <Button onClick= {() => handleClick(clientName, buildingName)}> Search Inventories </Button>

          </form>
        </div>
    </div>
  );
};

export default SearchExport;