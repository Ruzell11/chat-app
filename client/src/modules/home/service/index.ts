import config from "../../config";
import axios from "axios";

export const getUserChats = async(params: any) => {
    try {
        const response = await axios.get(`${config.baseURL}/api/v1/chats/${params}`);
        const json = await response.data;
        return json;
      } catch (error) {
        console.error(error);
        throw error; 
      }
}

export const getUserData = async(params: any) => {
    try {
        const response = await axios.get(`${config.baseURL}/api/v1/users/${params}`);
        const json = await response.data;
        return json;
      } catch (error) {
        console.error(error);
        throw error; 
      }
}

export const getAllUsers = async() => {
  try {
      const response = await axios.get(`${config.baseURL}/api/v1/users/`);
      const json = await response.data;
      return json;
    } catch (error) {
      console.error(error);
      throw error; 
    }
}

export const createChat = async(params: any) => {
  try {
      const response = await axios.post(`${config.baseURL}/api/v1/chats/`, params);
      const json = await response.data;
      return json;
    } catch (error) {
      console.error(error);
      throw error; 
    }
}

