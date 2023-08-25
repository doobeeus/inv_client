import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser, validateEmail } from "../../authService/authService";
import { toast } from "react-toastify";

const initialState = {
  email: "",
  password: ""
};

const Login = () => {
  const navigate = useNavigate();
  const [formData, setformData] = useState(initialState);
  const { email, password } = formData;

  const handleInputChange = (e) => {
  const { name, value } = e.target;
  setformData({ ...formData, [name]: value });
  };
    
  const login = async (e) => {
  e.preventDefault();
    
  if (!email || !password) {
   return toast.error("All fields are required");
  }
  if (!validateEmail(email)) {
    return toast.error("Please enter a valid email");
  }

    
  const userData = {
    email,
    password,
  };
  try {
    const data = await loginUser(userData);
    console.log(data); // thing that is actually putting out data in console from authService.js
    if (data){
      navigate("/home");
    }

  } catch (error) {
    console.log(error);
  }
  };
    
  return (
    <div>
        <div>
          <div className="--flex-center">
          </div>
          <h2>Login</h2>

          <form onSubmit={login}>
            <input
              type="email"
              placeholder="Email"
              required
              name="email"
              value={email}
              onChange={handleInputChange}
            />
            <input
              type="password"
              placeholder="Password"
              required
              name="password"
              value={password}
              onChange={handleInputChange}
            />
            <button type="submit" className="--btn --btn-primary --btn-block">
              Login
            </button>
          </form>

          <span>
            <p> &nbsp; Don't have an account? &nbsp;</p>
            <Link to="/">Register</Link>
          </span>
        </div>
    </div>
  );
};

export default Login;