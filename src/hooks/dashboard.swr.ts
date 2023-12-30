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
