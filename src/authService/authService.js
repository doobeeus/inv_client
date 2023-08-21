import axios from "axios";
import { toast } from "react-toastify";

export const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

export const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

// Register User
export const registerUser = async (userData) => {
  try {
    const response = await axios.post(
      `${BACKEND_URL}/api/users/register`,
      userData,
      { withCredentials: true }
    );
    if (response.statusText === "OK") {
      toast.success("User Registered successfully");
      return response.data;
    }
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    toast.error(message);
    return console.log(message);
  }
};

// Login User
export const loginUser = async (userData) => {
  try {
    const response = await axios.post(
      `${BACKEND_URL}/api/users/login`,
      userData
    );
    if (response.statusText === "OK") {
      alert("Login Successful...");
      return response.data; // data output, but none of the others are working? possibly due to jwt and authmiddleware?
    }

  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    toast.error(message);
    return console.log(message);
  }
};

// Logout User
export const logoutUser = async () => {
  try {
    await axios.get(`${BACKEND_URL}/api/users/logout`);
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    toast.error(message);
    return console.log(message);
  }
};

// create Client
export const createClientFunction = async (clientData) => {
  try {
    const response = await axios.post(
      `${BACKEND_URL}/api/clients/registerclient`,
      clientData
          );
    console.log(response.status);
    if (response.ok) {
      toast.success("Client Registered successfully");
    }
    return response;
  } catch (error) {
    const message = 
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return toast.error(message);
    ;
  }
};

// list all client data
export const getAllClientInfo = async () => {
  try {
    const response = await axios.get(`${BACKEND_URL}/api/clients/getAllClientInfo`);
    return response.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    toast.error(message);
    return console.log(message);
  }
};

// create Inventory
export const createInventoryFunction = async (invData) => {
  try {
    const response = await axios.post(
      `${BACKEND_URL}/api/inventories/createInv`,
      invData
          );
    return response;
  } catch (error) {
    const message = 
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return toast.error(message);
  }
};

// view Inventory
export const getAllInventory = async () => {
  try {
    const response = await axios.get(`${BACKEND_URL}/api/inventories/getAllInv`);
    return response.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    toast.error(message);
    return console.log(message);
  }
};

// query to find inventory
export const queryInvFunction = async (queryData) => {
  try {
    const response = await axios.post(
      `${BACKEND_URL}/api/inventories/queryInv`
      , queryData
      );
    return response.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    toast.error(message);
    return console.log(message);
  }
};

export const getOneInvFunction = async (queryData) => {
  try {
    const response = await axios.post(
      `${BACKEND_URL}/api/inventories/getoneinv`
      , queryData
      );
    return response.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    toast.error(message);
    return console.log(message);
  }
};

// delete inventory
export const deleteInvFunction = async (queryData) => {
  try {
    const response = await axios.post(
      `${BACKEND_URL}/api/inventories/deleteInv`
      , queryData
      );
    return response.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    toast.error(message);
    return console.log(message);
  }
};

// edit inventory
export const editInvFunction = async (queryData) => {
  try {
    const response = await axios.post(
      `${BACKEND_URL}/api/inventories/editInv`
      , queryData
      );
    return response.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    toast.error(message);
    return console.log(message);
  }
};