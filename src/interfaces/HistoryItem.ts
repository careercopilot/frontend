interface HistoryItem {
  user: {
    firstName: string;
    lastName: string;
    position: string;
    organization: string;
    avatar?: string;
  };
  timestamp: Date;
}

export default HistoryItem;
