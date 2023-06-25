interface HistoryItem {
  profile: {
    name: string;
    headline: string;
    image?: string;
  };
  createdAt: string;
}

export default HistoryItem;
