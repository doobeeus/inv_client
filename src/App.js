import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home.js";
import Login from "./pages/login/login.js";
import Register from "./pages/login/register.js";
import CreateClient from "./pages/client/createClient.js";
import SelectClient from "./pages/client/selectClient.js";
import CreateInventory from "./pages/inventory/createInv.js";
import InvToClient from "./pages/routes/fromInvToClient.js";
import InvToInvHome from "./pages/routes/InvToInvOrInvToHome.js";
import ViewAllInventory from "./pages/inventory/viewAllInv.js";
import SearchInventory from "./pages/search/searchInv.js";
import ExportInventory from "./pages/inventory/exportInv.js";
import ViewDeleteInventory from "./pages/inventory/viewDeleteInv.js";
import EditInventory from "./pages/inventory/editInv.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="Login" element = {<Login />} />
        <Route path="Home" element = {<Home />}/>
        <Route path="registerclient" element = {<CreateClient />}/>
        <Route path="selectclient" element = {<SelectClient />}/>
        <Route path="createinv" element = {<CreateInventory />} />
        <Route path="invtoclient" element = {<InvToClient />} />
        <Route path="invtoinvhome" element = {<InvToInvHome />} />
        <Route path="viewallinv" element = {<ViewAllInventory />} />
        <Route path="viewdeleteinv" element = {<ViewDeleteInventory />} />
        <Route path="searchinv" element = {<SearchInventory />} />
        <Route path="exportinv" element = {<ExportInventory />} />
        <Route path="editinv" element = {<EditInventory />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;