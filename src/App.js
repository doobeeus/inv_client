import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home.js";
import Login from "./pages/login/login.js";
import Register from "./pages/login/register.js";
import CreateClient from "./pages/client/createClient.js";
import ViewClient from "./pages/client/viewClient.js";
import CreateInventory from "./pages/inventory/createInv.js";
import InvToClient from "./pages/routes/fromInvToClient.js";
import InvToInvHome from "./pages/routes/InvToInvOrInvToHome.js";
import ViewInventory from "./pages/inventory/viewInv.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="Login" element = {<Login />} />
        <Route path="Home" element = {<Home />}/>
        <Route path="registerclient" element = {<CreateClient />}/>
        <Route path="viewclient" element = {<ViewClient />}/>
        <Route path="createinv" element = {<CreateInventory />} />
        <Route path="invtoclient" element = {<InvToClient />} />
        <Route path="invtoinvhome" element = {<InvToInvHome />} />
        <Route path="viewinv" element = {<ViewInventory />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;