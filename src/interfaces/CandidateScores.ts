import { StaticImageData } from "next/image";
import CandidateProfile from "@/interfaces/CandidateProfile";
import IOpening from "./Opening";

interface CandidateScores {
  _id: string;
  candidate: CandidateProfile;
  opening: IOpening;
  positionScore: number;
  skillScores: {
    name: string;
    score: number;
    icon: StaticImageData | string;
  }[];
  summary: string;
}

export default CandidateScores;
