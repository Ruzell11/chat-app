import axios from "axios";
import { RegisterParameters } from "../type";
import config from "../../config";

export const registerUser = async (params: RegisterParameters) => {
  try {
    const response = await axios.post(`${config.baseURL}/api/v1/users/register`, params);
    const json = await response.data;
    return json;
  } catch (error) {
    console.error(error);
    throw error; 
  }
};
