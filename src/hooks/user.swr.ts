import useSWR from "swr";
import userService from "@/services/user.service";
import API_CONSTANTS from "@/utils/apiConstants";
import IUser from "@/interfaces/User";

export function useUser() {
  const { data, error, isLoading } = useSWR(
    API_CONSTANTS.GET_USER,
    userService.getUserData
  );

  return {
    userData: data as IUser,
    isUserDataLoading: isLoading as boolean,
    error,
  };
}
