import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { registerUser, validateEmail } from "../../authService/authService";

const initialState = {
    name: "",
    email: "",
    password: "",
    password2: "",
  };

const Register = () => {
const navigate = useNavigate();
const [formData, setformData] = useState(initialState);
const { name, email, password, password2 } = formData;

const handleInputChange = (e) => {
  const { name, value } = e.target;
  setformData({ ...formData, [name]: value });
};
    
const register = async (e) => {
  e.preventDefault();
    
if (!name || !email || !password) {
  return toast.error("All fields are required");
}
if (password.length < 6) {
  return toast.error("Passwords must be up to 6 characters");
}
if (!validateEmail(email)) {
  return toast.error("Please enter a valid email");
}
if (password !== password2) {
  return toast.error("Passwords do not match");
}
    
const userData = {
  name,
  email,
  password,
};
try {
  const data = await registerUser(userData);
    console.log(data);
    // navigate("/login");
} catch (error) {
   console.log(error);
  }
};
    
      return (
        <div>
            <div>
              <div className="--flex-center">
              </div>
              <h2>Register</h2>
    
              <form onSubmit={register}>
                <input
                  type="text"
                  placeholder="Name"
                  required
                  name="name"
                  value={name}
                  onChange={handleInputChange}
                />
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
                <input
                  type="password"
                  placeholder="Confirm Password"
                  required
                  name="password2"
                  value={password2}
                  onChange={handleInputChange}
                />
                <button type="submit" className="--btn --btn-primary --btn-block">
                  Register
                </button>
              </form>
    
              <span>
                <Link to="/home">Home</Link>
                <p> &nbsp; Already have an account? &nbsp;</p>
                <Link to="/login">Login</Link>
              </span>
            </div>
        </div>
      );
  };

  export default Register;