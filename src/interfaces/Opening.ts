export interface ISkill {
  _id: string;
  name: string;
  link: string;
}

interface IOpening {
  _id: string;
  userId: string;
  position: string;
  type: "Full Time" | "Part Time" | "Internship" | "Contract" | string;
  experienceRequired: {
    min: number;
    max: number;
  };
  status: "open" | "closed";
  skills: ISkill[];
  companyDepartment: string;
  total: number;
  createdAt: string;
  stats: {
    success: number;
    processing: number;
    error: number;
    total: number;
  };
  selected: number;
}

export default IOpening;
