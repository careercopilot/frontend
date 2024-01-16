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
  GET_USER_OPENINGS = this.USER + "/openings";
  GET_OPENING = (id: string) => this.USER + "/opening/" + id;
  UPDATE_OPENING = (id: string) => this.USER + "/opening/" + id;
  DELETE_USER_OPENING = (id: string) => this.USER + "/opening/" + id;
  UPDATE_OPENING_STATUS = (id: string) =>
    this.USER + "/opening/" + id + "/status";
  CREATE_OPENING = this.USER + "/opening";
  UPDATE_USER = this.USER + "/";

  /** Skill Endpoints */
  SEARCH_SKILL = this.SKILL + "/searchskill";
  CREATE_SKILL = this.SKILL + "/";
}

const API_CONSTANTS = new APIConstants();

export default API_CONSTANTS;
