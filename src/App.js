import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home.js";
import Login from "./pages/login/login.js"
import Register from "./pages/login/register.js"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="Login" element = {<Login />} />
        <Route path="Home" element = {<Home />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;