export function useInsights() {
  return {
    insights: {
      totalResumesScreened: {
        value: Math.floor(Math.random() * 1000),
        change: Math.random() * 10 - 5,
      },
      jobOpeningsAdded: {
        value: Math.floor(Math.random() * 5),
        change: Math.random() * 10 - 5,
      },
      openPositions: {
        value: Math.floor(Math.random() * 20),
        change: Math.random() * 10 - 5,
      },
      averageMatchingScore: {
        value: Math.floor(Math.random() * 50) + 50 + "%",
        change: Math.random() * 10 - 5,
      },
    },
    isInsightsLoading: false,
    errorLoadingInsights: false,
  };
}

export function useRecentActivity() {
  return {
    recentActivity: [
      {
        id: 1,
        title: "Processed 10 resumes",
        description: "intiated by John Doe",
        color: "green",
      },
      {
        id: 2,
        title: "Add Full Stack Developer Job Opening",
        description: "by John Doe",
        link: "/openings/123",
      },
      {
        id: 3,
        title: "Error Processing 2 resumes",
        description: "intiated by John Doe",
        link: "/openings/123?error=true",
        color: "red",
      },
      {
        id: 4,
        title: "Processed 10 resumes",
        description: "intiated by John Doe",
        link: "/dashboard",
        color: "green",
      },
      {
        id: 5,
        title: "Processed 10 resumes",
        description: "intiated by John Doe",
        link: "/dashboard",
        color: "green",
      },
    ],
    isRecentActivityLoading: false,
    errorLoadingRecentActivity: false,
  };
}
