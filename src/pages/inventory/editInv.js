import { useEffect, useState, React } from "react";
import { Link, useNavigate, useLocation} from "react-router-dom";
import { toast } from "react-toastify";
import { getOneInvFunction, editInvFunction} from "../../authService/authService";

const EditInventory = () => {
    const location = useLocation();
    const prevData = location.state;
    const navigate = useNavigate();
    const initialState = {
        _id: prevData._id,
        clientName: "", 
        buildingName: "", 
        roomArea: "", 
        fixtureType: "", 
        lampType: "", 
        numLamps: "", 
        numFixtures: "", 
        lampWattage: ""
      };
    const [initInvData, setInitInvData] = useState(initialState);
    useEffect(() => {
        let data2 = {};
        const fetchData = async () => {
            try {
                const data = await getOneInvFunction(prevData);
                let data1 = data[0];
                data2 = data1;
            }
            catch (error){
                console.log(error);
            }
            setInitInvData(data2);
        };
        fetchData();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setInitInvData({ ...initInvData, [name]: value });
        console.log(initInvData);
      };

    const register = async (e) => {
        e.preventDefault();
        const { _id, clientName, buildingName, roomArea, fixtureType, lampType, numLamps, numFixtures, lampWattage } = initInvData;

        if (!clientName || !buildingName|| !roomArea || !fixtureType || !lampType || !numLamps || !numFixtures || !lampWattage) {
            return toast.error("All fields are required");
      }
          
      const invData = {
        _id, clientName, buildingName, roomArea, fixtureType, lampType, numLamps, numFixtures, lampWattage
      };
      console.log(invData);
      try {
        const data = await editInvFunction(invData);
        if(data.acknowledged === true && data.modifiedCount === 1 ){
            alert("Inventory successfully updated.")
        }
      } catch (error) {
         console.log(error);
        }
      };

      return (
        <div>
            <div>
              <div className="--flex-center">
              <h2>Edit Inventory</h2>
              <form onSubmit={register}>
                <input
                  type="text"
                  placeholder="clientName"
                  required
                  name="clientName"
                  defaultValue={initInvData.clientName}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  placeholder="buildingName"
                  required
                  name="buildingName"
                  defaultValue={initInvData.buildingName}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  placeholder="roomArea"
                  required
                  name="roomArea"
                  defaultValue={initInvData.roomArea}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  placeholder="fixtureType"
                  required
                  name="fixtureType"
                  defaultValue={initInvData.fixtureType}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  placeholder="lampType"
                  required
                  name="lampType"
                  defaultValue={initInvData.lampType}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  placeholder="numLamps"
                  required
                  name="numLamps"
                  defaultValue={initInvData.numLamps}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  placeholder="numFixtures"
                  required
                  name="numFixtures"
                  defaultValue={initInvData.numFixtures}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  placeholder="lampWattage"
                  required
                  name="lampWattage"
                  defaultValue={initInvData.lampWattage}
                  onChange={handleInputChange}
                />
                <button type="submit" className="--btn --btn-primary --btn-block">
                  Register Inventory
                </button>
              </form>
              </div>
            </div>
        </div>
      );
  };


  export default EditInventory;