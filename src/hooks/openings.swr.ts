import IOpening from "@/interfaces/Opening";
import API_CONSTANTS from "@/utils/apiConstants";
import { genericAPIFetcher } from "@/utils/helpers/swr.helper";
import useSWR from "swr";

export function useOpenings(query: { open?: boolean }) {
  // const fakeOpenings: Opening[] = [
  //   {
  //     _id: "123",
  //     title: "Software Engineer",
  //     companyDepartment: "Engineering",
  //     type: "Full-Time",
  //     total: 5,
  //     requiredExperience: { min: 2, max: 5 },
  //     skills: [
  //       { _id: "1", name: "JavaScript", link: "https://example.com/js" },
  //       { _id: "2", name: "React", link: "https://example.com/react" },
  //       { _id: "3", name: "Node.js", link: "https://example.com/nodejs" },
  //     ],
  //     createdAt: "2024-01-01T10:00:00Z",
  //     status: "open",
  //     stats: { success: 2, processing: 1, error: 0, total: 3 },
  //     selected: 1,
  //   },
  //   {
  //     _id: "1234",
  //     title: "Data Scientist",
  //     companyDepartment: "Data Science",
  //     type: "Contract",
  //     total: 2,
  //     requiredExperience: { min: 3, max: 7 },
  //     skills: [
  //       { _id: "4", name: "Python", link: "https://example.com/python" },
  //       { _id: "5", name: "Machine Learning", link: "https://example.com/ml" },
  //       {
  //         _id: "6",
  //         name: "TensorFlow",
  //         link: "https://example.com/tensorflow",
  //       },
  //     ],
  //     status: "open",
  //     createdAt: "2024-01-02T09:30:00Z",
  //     stats: { success: 1, processing: 0, error: 0, total: 1 },
  //     selected: 1,
  //   },
  //   {
  //     _id: "12345",
  //     title: "UI/UX Designer",
  //     companyDepartment: "Design",
  //     type: "Part-Time",
  //     total: 3,
  //     requiredExperience: { min: 1, max: 4 },
  //     skills: [
  //       { _id: "7", name: "Adobe XD", link: "https://example.com/xd" },
  //       { _id: "8", name: "Sketch", link: "https://example.com/sketch" },
  //       { _id: "9", name: "UI/UX Design", link: "https://example.com/uiux" },
  //     ],
  //     createdAt: "2024-01-03T14:15:00Z",
  //     status: "open",
  //     stats: { success: 0, processing: 2, error: 1, total: 3 },
  //     selected: 0,
  //   },
  //   {
  //     _id: "12356",
  //     title: "Marketing Specialist",
  //     companyDepartment: "Marketing",
  //     type: "Full-Time",
  //     total: 4,
  //     requiredExperience: { min: 2, max: 6 },
  //     skills: [
  //       {
  //         _id: "10",
  //         name: "Digital Marketing",
  //         link: "https://example.com/digital",
  //       },
  //       { _id: "11", name: "SEO", link: "https://example.com/seo" },
  //       { _id: "12", name: "Social Media", link: "https://example.com/social" },
  //     ],
  //     status: "closed",
  //     createdAt: "2024-01-04T11:45:00Z",
  //     stats: { success: 3, processing: 1, error: 0, total: 4 },
  //     selected: 2,
  //   },
  //   {
  //     _id: "1234567",
  //     title: "Network Administrator",
  //     companyDepartment: "IT",
  //     type: "Contract",
  //     total: 1,
  //     requiredExperience: { min: 4, max: 8 },
  //     skills: [
  //       { _id: "13", name: "Cisco", link: "https://example.com/cisco" },
  //       {
  //         _id: "14",
  //         name: "Network Security",
  //         link: "https://example.com/network-security",
  //       },
  //       { _id: "15", name: "Firewalls", link: "https://example.com/firewalls" },
  //     ],
  //     status: "closed",
  //     createdAt: "2024-01-05T08:30:00Z",
  //     stats: { success: 0, processing: 0, error: 1, total: 1 },
  //     selected: 0,
  //   },
  // ];

  // return {
  //   openings: fakeOpenings,
  //   isLoadingOpenings: false,
  //   errorLoadingOpenings: false,
  // };

  const { data, isLoading, error, mutate, isValidating } = useSWR<{
    data: IOpening[];
  }>(
    [
      API_CONSTANTS.GET_USER_OPENINGS,
      "get",
      {
        params: query,
      },
    ],
    genericAPIFetcher
  );

  return {
    openings: data?.data,
    isLoadingOpenings: isLoading,
    errorLoadingOpenings: error,
    mutateOpenings: mutate,
    isValidatingOpenings: isValidating,
  };
}

export function useOpeningData(id: string) {
  const fakeOpening: IOpening = {
    userId: "123",
    _id: "123",
    position: "Software Engineer",
    companyDepartment: "Engineering",
    type: "Full-Time",
    total: 5,
    experienceRequired: { min: 2, max: 5 },
    skills: [
      { _id: "1", name: "JavaScript", link: "https://example.com/js" },
      { _id: "2", name: "React", link: "https://example.com/react" },
      { _id: "3", name: "Node.js", link: "https://example.com/nodejs" },
    ],
    createdAt: "2024-01-01T10:00:00Z",
    status: "open",
    stats: { success: 2, processing: 1, error: 0, total: 3 },
    selected: 1,
  };

  return {
    opening: fakeOpening,
    isLoadingOpening: false,
    errorLoadingOpening: false,
  };
}
