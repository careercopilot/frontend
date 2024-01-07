import PrimaryContainer from "@/components/app/general/PrimaryContainer";
import CompanyProfile from "@/components/app/profile/CompanyProfile";

export default function Home() {
  return (
    <>
      <PrimaryContainer p={0}>
        <CompanyProfile />
      </PrimaryContainer>
    </>
  );
}
