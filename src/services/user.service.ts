import API_CONSTANTS from "@/utils/apiConstants";
import axios from "axios";

class UserService {
  async getUserData() {
    try {
      const response = await axios.get(API_CONSTANTS.GET_USER);
      return response.data;
    } catch (err: any) {
      console.log("Error Fetching Data", err);
      throw err;
    }
  }
}

const userService = new UserService();
export default userService;
