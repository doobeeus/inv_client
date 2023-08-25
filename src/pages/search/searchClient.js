import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Button from 'react-bootstrap/Button';

const initialState = {
  clientName: ""
};

const SearchClient = () => {
  const navigate = useNavigate();
  const [formData, setformData] = useState(initialState);
  const { clientName } = formData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
  };
    
  const queryData = {
    clientName
  };
const viewDeleteClient = (clientName) => {
    const data = {clientName : clientName};
    navigate("/viewdeleteclient", {state: data});
};
    
  return (
    <div>
        <div>
          <div className="--flex-center">
          </div>
          <h2>Search Clients</h2>

          <form>
            <input
              type="clientName"
              placeholder="clientName"
              required
              name="clientName"
              value={clientName}
              onChange={handleInputChange}
            />
            <Button onClick= {() => viewDeleteClient(clientName)}> Edit/Delete </Button>

          </form>
        </div>
    </div>
  );
};

export default SearchClient;