import { useEffect, useState, React } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getAllClientInfo, getAllInventory } from "../../authService/authService";
import Button from 'react-bootstrap/Button';


const ViewInventory = () => {
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
        fetchData();
    }, []);

    // const handleClick = (clientName, buildingName) => {
    //     const data = {clientName : clientName, buildingName: buildingName};
    //     navigate("/createinv", {state: data});
    // }
      return (
        <div>
            <div>
              <div className="--flex-center">
              <h2>Click client to use in inventory</h2>
              {invData.map((inv, index) => 
              <ul>
                <li>
               {inv.clientName}<br></br>{inv.buildingName}
              </li>
              </ul>
              )}
              </div>
              
            </div>
        </div>
      );
  };


  export default ViewInventory;