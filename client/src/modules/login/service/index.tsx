import axios from "axios";
import { LoginParameters } from "../type";
import config from "../../config";

export const loginUser = async (params: LoginParameters) => {
  try {
    const response = await axios.post(`${config.baseURL}/api/v1/users/login`, params);
    const json = await response.data;
    return json;
  } catch (error) {
    console.error(error);
    throw error; 
  }
};
