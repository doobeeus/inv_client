import { useEffect, useState, React } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getAllClientInfo, getAllInventory, editInvFunction, deleteInvFunction, getLoginStatus } from "../../authService/authService";
import Button from 'react-bootstrap/Button';


const ViewAllInventory = () => {
    const navigate = useNavigate();
    const [invData, setInvData] = useState([]);
    useEffect(() => {
        const fetchedInvData = [];
        const fetchData = async () => {
            try {
                const data = await getAllInventory();
                let allDocs = []
                data.forEach((doc) => {
                    allDocs.push({...doc});
                });
                for (const item of allDocs){
                    fetchedInvData.push(item);
                }
            }
            catch (error){
                console.log(error);
            }
            setInvData(fetchedInvData);
        };
        const verifyCookie = async (req, res) => {
            const loggedin = await getLoginStatus();
            if(loggedin == false){
              navigate("/login");
            }
          };
          verifyCookie();
        fetchData();
    }, []);

      return (
        <div>
            <div>
              <div className="--flex-center">
              <h2>View Inventory</h2>
              {invData.map((inv, index) => 
              <ul>
              <li>
             Client Name: {inv.clientName}<br></br>
             Building Name: {inv.buildingName}<br></br>
             Room Area: {inv.roomArea}<br></br>
             Fixture Type: {inv.fixtureType}<br></br>
             Lamp Type: {inv.lampType}<br></br>
             Number of Lamps: {inv.numLamps}<br></br>
             Number of Fixtures: {inv.numFixtures}<br></br>
             Lamp Wattage: {inv.lampWattage}<br></br>
            </li>
            </ul>
              )}
              </div>
              
            </div>
        </div>
      );
  };


  export default ViewAllInventory;