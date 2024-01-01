interface Opening {
  title: string;
  companyDepartment: string;
  type: string;
  total: number;
  requiredExperience: {
    min: number;
    max: number;
  };
  skills: {
    _id: string;
    name: string;
    link: string;
  }[];
  createdAt: string;
  stats: {
    success: number;
    processing: number;
    error: number;
    total: number;
  };
  selected: number;
}

export default Opening;
