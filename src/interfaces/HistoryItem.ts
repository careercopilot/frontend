interface HistoryItem {
  user: {
    fName: string;
    lName: string;
    position: string;
    organization: string;
    avatar?: string;
  };
  timestamp: string;
}

export default HistoryItem;
