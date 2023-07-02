interface HistoryItem {
  profile: {
    name: string;
    headline: string;
    image?: string;
  };
  meta: {
    source: string;
    url: string;
  };
  createdAt: string;
}

export default HistoryItem;
