import { StaticImageData } from "next/image";
import CandidateProfile from "@/interfaces/CandidateProfile";
import Opening from "./Opening";

interface CandidateScores {
  _id: string;
  candidate: CandidateProfile;
  opening: Opening;
  positionScore: number;
  skillScores: {
    name: string;
    score: number;
    icon: StaticImageData | string;
  }[];
  summary: string;
}

export default CandidateScores;
