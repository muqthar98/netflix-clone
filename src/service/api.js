import axios from "axios";

const baseUrl = "http://localhost:8080";

export const logIn = async (user) => {
  try {
    await axios.post(`${baseUrl}/login`, user);
  } catch (err) {
    console.log("error in login", err.message);
  }
};

export const signUp = async (user) => {
  try {
    await axios.post(`${baseUrl}/signup`, user);
  } catch (err) {
    console.log("error in login", err.message);
  }
};
