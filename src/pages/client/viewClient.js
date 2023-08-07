import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getAllClientInfo } from "../../authService/authService";

const ViewClient = () => {
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
                console.log(allDocs);
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
      return (
        <div>
            <div>
              <div className="--flex-center">
              <h2>View clients</h2>
              {clientData.map((client, index) => <li>{client.compName}</li>)}
              </div>
              
            </div>
        </div>
      );
  };


  export default ViewClient;