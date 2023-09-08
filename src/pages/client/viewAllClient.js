import { useEffect, useState, React } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getAllClientInfo, getLoginStatus } from "../../authService/authService";
import Button from 'react-bootstrap/Button';

const ViewAllClient = () => {
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
              <h2>View All Clients</h2>
              {clientData.map((client, index) => 
              <ul>
                <li>
                {client.clientName}<br></br>
                {client.buildingName}<br></br>
                {client.address}<br></br>
                {client.contactName}<br></br>
                {client.phoneNum}<br></br>
                {client.contactEmail}<br></br>
                {client.hoursOp}<br></br>
              </li>
              </ul>
              )}
              </div>
            </div>
        </div>
      );
  };


  export default ViewAllClient;