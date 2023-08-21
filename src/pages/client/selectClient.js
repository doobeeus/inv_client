import { useEffect, useState, React } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getAllClientInfo } from "../../authService/authService";
import Button from 'react-bootstrap/Button';

const SelectClient = () => {
    const navigate = useNavigate();
    const [clientData, setClientData] = useState([]);
    useEffect(() => {
        const fetchedClientData = [];
        const fetchData = async () => {
            try {
                const data = await getAllClientInfo();
                let allDocs = []
                data.forEach((doc) => {
                    allDocs.push({...doc});
                });
                for (const item of allDocs){
                    fetchedClientData.push(item);
                }

            }
            catch (error){
                console.log(error);
            }
            setClientData(fetchedClientData);
        };
        fetchData();
    }, []);

    const handleClick = (clientName, buildingName) => {
        const data = {clientName : clientName, buildingName: buildingName};
        navigate("/createinv", {state: data});
    }
      return (
        <div>
            <div>
              <div className="--flex-center">
              <h2>Click client to use in inventory</h2>
              {clientData.map((client, index) => 
              <ul>
                <li>
              <Button onClick= {() => handleClick(client.clientName, client.buildingName)}> {client.clientName}<br></br>{client.buildingName}</Button>
              </li>
              </ul>
              )}
              </div>
            </div>
        </div>
      );
  };


  export default SelectClient;