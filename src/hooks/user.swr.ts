import useSWR from "swr";
import userService from "@/services/user.service";
import API_CONSTANTS from "@/utils/apiConstants";
import IUser from "@/interfaces/User";
import HistoryItem from "@/interfaces/HistoryItem";

export function useUser() {
  const { data, error, isLoading } = useSWR(
    API_CONSTANTS.GET_USER,
    userService.getUserData
  );

  return {
    userData: data as IUser,
    isUserDataLoading: isLoading as boolean,
    errorFetchingUserData: error,
  };
}

export function useUserHistory(page = 1, limit = 10) {
  const { data, error, isLoading } = useSWR(
    [API_CONSTANTS.GET_USER_HISTORY, page, limit],
    userService.getUserHistory
  );

  return {
    userHistory: data?.history as HistoryItem[],
    userHistoryCount: data?.total as number,
    isUserHistoryLoading: isLoading as boolean,
    errorFetchingUserHistory: error,
  };
}
