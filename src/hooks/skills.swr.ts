import API_CONSTANTS from "@/utils/apiConstants";
import { genericAPIFetcher } from "@/utils/helpers/swr.helper";
import useSWR from "swr";

export function useSkillsSearch(query: string) {
  const { data, error, isLoading } = useSWR(
    [
      API_CONSTANTS.SEARCH_SKILL,
      "get",
      {
        params: query && {
          keyword: query,
        },
      },
    ],
    genericAPIFetcher
  );

  return {
    skills: data?.data as {
      _id: string;
      name: string;
      link: string;
    }[],
    isSkillsLoading: isLoading,
    errorFetchingSkills: error,
  };
}
