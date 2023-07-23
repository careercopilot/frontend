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
  position: string;
  linkedinUrl: string;
}

export default HistoryItem;
