interface HistoryItem {
  user: {
    firstName: string;
    lastName: string;
    position: string;
    organization: string;
    avatar?: string;
  };
  timestamp: string;
}

export default HistoryItem;
