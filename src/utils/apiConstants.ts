class APIConstants {
  BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

  /** Sub Routes */
  AUTH = this.BASE_URL + "/auth";
  USER = this.BASE_URL + "/user";
  SKILL = this.BASE_URL + "/skill";
  PREDICTION = this.BASE_URL + "/prediction";

  /** Auth Endpoints */
  LOGIN = this.AUTH + "/login";
  REGISTER = this.AUTH + "/signup";
  GOOGLE_LOGIN = this.AUTH + "/google-login";

  /** User Endpoints */
  GET_USER = this.USER + "/";
  GET_USER_HISTORY = this.USER + "/history";
}

const API_CONSTANTS = new APIConstants();
console.log(API_CONSTANTS.BASE_URL);

export default API_CONSTANTS;
