import API_CONSTANTS from "@/utils/apiConstants";
import axios from "axios";

class AuthService {
  async login(credentials: { email: string; password: string }) {
    try {
      const { data } = await axios.post(API_CONSTANTS.LOGIN, credentials);
      return data;
    } catch (err: any) {
      console.log("Error Logging In", err);
      throw err;
    }
  }

  async register(credentials: {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    company: string;
  }) {
    try {
      const { data } = await axios.post(API_CONSTANTS.REGISTER, credentials);
      return data;
    } catch (err: any) {
      console.log("Error Signing Up", err);
      throw err;
    }
  }

  async google(payload: { code: string; company: string }) {
    try {
      const { data } = await axios.post(API_CONSTANTS.GOOGLE_LOGIN, payload);
      return data;
    } catch (err: any) {
      console.log("Error Logging In", err);
      throw err;
    }
  }
}

const authService = new AuthService();
export default authService;
