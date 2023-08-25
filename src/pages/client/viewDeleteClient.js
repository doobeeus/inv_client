import { useEffect, useState, React } from "react";
import { Link, useNavigate, useLocation} from "react-router-dom";
import { toast } from "react-toastify";
import {queryClientFunction, deleteClientFunction } from "../../authService/authService";
import Button from "react-bootstrap/esm/Button";

const ViewDeleteClient = () => {
    const location = useLocation();
    const prevData = location.state;
    const navigate = useNavigate();
    const [clientData, setClientData] = useState([]);
    useEffect(() => {
        const fetchedClientData = [];   
        const fetchData = async () => {
            try {
                const data = await queryClientFunction(prevData);
                console.log(data);
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
    const editClient = (_id) => {
        const data = {_id: _id};
        navigate("/editclient", {state: data});
    };
    const deleteClient = async(_id) => {
        const data = {_id: _id};
            try{
            const dlt = await deleteClientFunction(data);
            if(dlt.acknowledged === true && dlt.deletedCount === 1){
                alert("Delete Success!");
            }
            }
            catch(e){
                console.log(e);
            }
    };
    const handleClick = (clientName, buildingName) => {
        const data = {clientName : clientName, buildingName: buildingName};
        navigate("/createinv", {state: data});
    }

      return (
        <div>
            <div>
              <div className="--flex-center">
              <h2>Edit, Delete, or use Client</h2>
              {clientData.map((client, index) => 
              <ul>
               <li>
               <Button onClick= {() => handleClick(client.clientName, client.buildingName)}> 
                {client.clientName}<br></br>
                {client.buildingName}<br></br>
                {client.address}<br></br>
                {client.contactName}<br></br>
                {client.phoneNum}<br></br>
                {client.contactEmail}<br></br>
                {client.hoursOp}<br></br>
               </Button>
               <Button onClick= {() => editClient(client._id)}> Edit </Button>
               <Button onClick= {() => deleteClient(client._id)}> Delete </Button>
              </li>
              </ul>
              )}
              </div>
              
            </div>
        </div>
      );
  };


  export default ViewDeleteClient;