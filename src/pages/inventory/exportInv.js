import { useEffect, useState, React } from "react";
import { Link, useNavigate, useLocation} from "react-router-dom";
import { toast } from "react-toastify";
import {queryExportFunction } from "../../authService/authService";
import { CSVLink, CSVDownload} from "react-csv";

const ExportInventory = () => {
    const location = useLocation();
    const prevData = location.state;
    const navigate = useNavigate();
    const [invData, setInvData] = useState([]);
    useEffect(() => {
        const fetchedInvData = [];
        const fetchData = async () => {
            try {
                const data = await queryExportFunction(prevData);
                console.log(data);
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

      return (
        <div>
            <div>
              <div className="--flex-center">
              <h2>Export Inventory</h2>
              {invData.map((inv, index) => 
              <ul>
                <li>
               {inv.clientName}<br></br>
               {inv.buildingName}<br></br>
               {inv.roomArea}<br></br>
               {inv.fixtureType}<br></br>
               {inv.lampType}<br></br>
               {inv.numLamps}<br></br>
               {inv.numFixtures}<br></br>
               {inv.lampWattage}<br></br>
              </li>
              </ul>
              )}
              </div>
              <CSVLink data={invData}>Download me</CSVLink>;

              
            </div>
        </div>
      );
  };


  export default ExportInventory;