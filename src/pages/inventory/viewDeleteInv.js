import { useEffect, useState, React } from "react";
import { Link, useNavigate, useLocation} from "react-router-dom";
import { toast } from "react-toastify";
import {queryInvFunction, deleteInvFunction } from "../../authService/authService";
import Button from "react-bootstrap/esm/Button";
import { CSVLink } from "react-csv";

const ViewDeleteInventory = () => {
    const location = useLocation();
    const prevData = location.state;
    const navigate = useNavigate();
    const [invData, setInvData] = useState([]);
    useEffect(() => {
        const fetchedInvData = [];
        const fetchData = async () => {
            try {
                const data = await queryInvFunction(prevData);
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
    const editInv = (_id) => {
        const data = {_id: _id};
        navigate("/editinv", {state: data});
    };
    const deleteInv = async(_id) => {
        const data = {_id: _id};
            try{
            const dlt = await deleteInvFunction(data);
            if(dlt.acknowledged === true && dlt.deletedCount === 1){
                alert("Delete Success!");
            }
            }
            catch(e){
                console.log(e);
            }
    };

      return (
        <div>
            <div>
              <div className="--flex-center">
              <h2>Edit or Delete Inventory</h2>
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
              <Button onClick= {() => editInv(inv._id)}> Edit </Button>
              <Button onClick= {() => deleteInv(inv._id)}> Delete </Button>
              </ul>
              )}
              </div>
              <CSVLink data={invData}>Download me</CSVLink>;

              
            </div>
        </div>
      );
  };


  export default ViewDeleteInventory;