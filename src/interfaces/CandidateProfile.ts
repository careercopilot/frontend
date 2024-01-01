import { StaticImageData } from "next/image";

interface CandidateProfile {
  _id: string;
  firstName: string;
  lastName: string;
  position: string;
  summary: string;
  image?: string | StaticImageData;
  source: "linkedin" | "resume";
}

export default CandidateProfile;
