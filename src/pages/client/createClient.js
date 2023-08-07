import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { createClientFunction } from "../../authService/authService";
// import { registerUser, validateEmail } from "../../authService/authService";

const initialState = {
    compName: "", 
    buildingName: "", 
    address: "",
    contactName: "", 
    phoneNum: "", 
    contactEmail: "", 
    hoursOp: ""
  };

const CreateClient = () => {

const navigate = useNavigate();
const [formData, setformData] = useState(initialState);
const { compName, buildingName, address, contactName, phoneNum, contactEmail, hoursOp} = formData;

const handleInputChange = (e) => {
  const { name, value } = e.target;
  setformData({ ...formData, [name]: value });
};
    
const register = async (e) => {
  e.preventDefault();
    
if (!compName || !buildingName|| !address || !contactName|| !phoneNum || !contactEmail || !hoursOp) {
  return toast.error("All fields are required");
}
    
const clientData = {
    compName, buildingName, address, contactName, phoneNum, contactEmail, hoursOp
};
try {
  const data = await createClientFunction(clientData);
  if (data){
    alert("Client created successfully");
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
              <h2>Create New Client</h2>
    
              <form onSubmit={register}>
                <input
                  type="text"
                  placeholder="compName"
                  required
                  name="compName"
                  value={compName}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  placeholder="buildingName"
                  required
                  name="buildingName"
                  value={buildingName}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  placeholder="address"
                  required
                  name="address"
                  value={address}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  placeholder="contactName"
                  required
                  name="contactName"
                  value={contactName}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  placeholder="phoneNum"
                  required
                  name="phoneNum"
                  value={phoneNum}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  placeholder="contactEmail"
                  required
                  name="contactEmail"
                  value={contactEmail}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  placeholder="hoursOp"
                  required
                  name="hoursOp"
                  value={hoursOp}
                  onChange={handleInputChange}
                />
                <button type="submit" className="--btn --btn-primary --btn-block">
                  Register Client
                </button>
              </form>
    
              <span>
                <Link to="/home">Home</Link>
                <p> &nbsp; Already have an account? &nbsp;</p>
                <Link to="/login">Login</Link>
              </span>
            </div>
        </div>
      );
  };

  export default CreateClient;