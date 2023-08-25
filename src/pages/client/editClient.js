import { useEffect, useState, React } from "react";
import { Link, useNavigate, useLocation} from "react-router-dom";
import { toast } from "react-toastify";
import { getOneClientFunction, editClientFunction} from "../../authService/authService";

const EditClient = () => {
    const location = useLocation();
    const prevData = location.state;
    const navigate = useNavigate();
    const initialState = {
        _id: prevData._id,
        clientName: "", 
        buildingName: "", 
        address: "",
        contactName: "", 
        phoneNum: "", 
        contactEmail: "", 
        hoursOp: ""
      };
    const [initClientData, setInitClientData] = useState(initialState);
    useEffect(() => {
        let data2 = {};
        const fetchData = async () => {
            try {
                const data = await getOneClientFunction(prevData);
                let data1 = data;
                data2 = data1;
            }
            catch (error){
                console.log(error);
            }
            setInitClientData(data2);
        };
        fetchData();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setInitClientData({ ...initClientData, [name]: value });
      };

    const register = async (e) => {
        e.preventDefault();
        const { _id, clientName, buildingName, address, contactName, phoneNum, contactEmail, hoursOp } = initClientData;

        if (!clientName || !buildingName|| !address || !contactName || !phoneNum || !contactEmail || !hoursOp ) {
            return toast.error("All fields are required");
      }
          
      const clientData = {_id, clientName, buildingName, address, contactName, phoneNum, contactEmail, hoursOp };
      console.log(clientData);
      try {
        const data = await editClientFunction(clientData);
        if(data.acknowledged === true && data.modifiedCount === 1 ){
            alert("Client successfully updated.")
        }
      } catch (error) {
         console.log(error);
        }
      };

      return (
        <div>
            <div>
              <div className="--flex-center">
              <h2>Edit Client</h2>
              <form onSubmit={register}>
                <input
                  type="text"
                  placeholder="clientName"
                  required
                  name="clientName"
                  defaultValue={initClientData.clientName}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  placeholder="buildingName"
                  required
                  name="buildingName"
                  defaultValue={initClientData.buildingName}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  placeholder="address"
                  required
                  name="address"
                  defaultValue={initClientData.address}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  placeholder="contactName"
                  required
                  name="contactName"
                  defaultValue={initClientData.contactName}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  placeholder="phoneNum"
                  required
                  name="phoneNum"
                  defaultValue={initClientData.phoneNum}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  placeholder="contactEmail"
                  required
                  name="contactEmail"
                  defaultValue={initClientData.contactEmail}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  placeholder="hoursOp"
                  required
                  name="hoursOp"
                  defaultValue={initClientData.hoursOp}
                  onChange={handleInputChange}
                  />
                <button type="submit" className="--btn --btn-primary --btn-block">
                  Edit Client
                </button>
              </form>
              </div>
            </div>
        </div>
      );
  };


  export default EditClient;