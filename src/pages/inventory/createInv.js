import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { createInventoryFunction } from "../../authService/authService";
// import { registerUser, validateEmail } from "../../authService/authService";


const CreateInventory = () => {
  const location = useLocation();
  const prevData = location.state;
  const initialState = {
      clientName: prevData.clientName, 
      buildingName: prevData.buildingName, 
      roomArea: "", 
      fixtureType: "", 
      lampType: "", 
      numLamps: "", 
      numFixtures: "", 
      lampWattage: ""
    };
const navigate = useNavigate();
const [formData, setformData] = useState(initialState);
const { clientName, buildingName, roomArea, fixtureType, lampType, numLamps, numFixtures, lampWattage } = formData;

const handleInputChange = (e) => {
  const { name, value } = e.target;
  setformData({ ...formData, [name]: value });
};
    
const register = async (e) => {
  e.preventDefault();
    
if (!clientName || !buildingName|| !roomArea || !fixtureType || !lampType || !numLamps || !numFixtures || !lampWattage) {
  return toast.error("All fields are required");
}
    
const invData = {
  clientName, buildingName, roomArea, fixtureType, lampType, numLamps, numFixtures, lampWattage
};
try {
  const data = await createInventoryFunction(invData);
  if(data.status === 201){
    const clientData = {clientName : invData.clientName, buildingName: invData.buildingName};
    console.log(clientData);
    navigate("/invtoinvhome", {state: clientData});
  }
} catch (error) {
   console.log(error);
  }
};
    
      return (
        <div>
            <div>
              <div className="--flex-center">
              </div>
              <h2>Create New Inventory</h2>
    
              <form onSubmit={register}>
                <input
                  type="text"
                  placeholder="clientName"
                  required
                  name="clientName"
                  defaultValue={prevData.clientName}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  placeholder="buildingName"
                  required
                  name="buildingName"
                  defaultValue={prevData.buildingName}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  placeholder="roomArea"
                  required
                  name="roomArea"
                  value={roomArea}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  placeholder="fixtureType"
                  required
                  name="fixtureType"
                  value={fixtureType}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  placeholder="lampType"
                  required
                  name="lampType"
                  value={lampType}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  placeholder="numLamps"
                  required
                  name="numLamps"
                  value={numLamps}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  placeholder="numFixtures"
                  required
                  name="numFixtures"
                  value={numFixtures}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  placeholder="lampWattage"
                  required
                  name="lampWattage"
                  value={lampWattage}
                  onChange={handleInputChange}
                />
                <button type="submit" className="--btn --btn-primary --btn-block">
                  Register Inventory
                </button>
              </form>
    
              <span>
                <Link to="/home">Home</Link>
              </span>
            </div>
        </div>
      );
  };

  export default CreateInventory;