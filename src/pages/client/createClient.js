import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { createClientFunction, getLoginStatus } from "../../authService/authService";

const initialState = {
    clientName: "", 
    buildingName: "", 
    address: "",
    contactName: "", 
    phoneNum: "", 
    contactEmail: "", 
    hoursOp: ""
  };

const CreateClient = () => {

  useEffect(() => {
    const verifyCookie = async (req, res) => {
      const loggedin = await getLoginStatus();
      if(loggedin == false){
        navigate("/login");
      }
    };
    verifyCookie();
  }, []);

const navigate = useNavigate();
const [formData, setformData] = useState(initialState);
const { clientName, buildingName, address, contactName, phoneNum, contactEmail, hoursOp} = formData;

const handleInputChange = (e) => {
  const { name, value } = e.target;
  setformData({ ...formData, [name]: value });
};
    
const register = async (e) => {
  e.preventDefault();
    
if (!clientName || !buildingName|| !address || !contactName|| !phoneNum || !contactEmail || !hoursOp) {
  return toast.error("All fields are required");
}
    
const clientData = {
    clientName, buildingName, address, contactName, phoneNum, contactEmail, hoursOp
};
try {
  const data = await createClientFunction(clientData);
  if(data.status == 201){
  const transferData = {clientName : clientName, buildingName: buildingName};
    navigate("/createinv", {state: transferData});
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
                  placeholder="clientName"
                  required
                  name="clientName"
                  value={clientName}
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
                <button type="submit" className="--btn --btn-primary --btn-block" >
                  Register Client
                </button>
              </form>
    
              <span>
                <Link to="/home">Home</Link>
              </span>
            </div>
        </div>
      );
  };

  export default CreateClient;