import axios from "axios";

export const allRegister = async (user) =>
  await axios.get(`${process.env.REACT_APP_API}/all-register-user`, user);
