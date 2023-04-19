import { StaticImageData } from "next/image";
import CandidateProfile from "@/interfaces/CandidateProfile";

interface CandidateScores {
  _id: string;
  candidate: CandidateProfile | string;
  position: string;
  positionScore: number;
  skillScores: {
    name: string;
    score: number;
    icon: StaticImageData | string;
  }[];
}

export default CandidateScores;
