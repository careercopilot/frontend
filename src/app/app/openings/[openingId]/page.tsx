import PrimaryContainer from "@/components/app/general/PrimaryContainer";
import OpeningDetails from "@/components/app/openings/OpeningDetails";

export default function Home() {
  return (
    <>
      <PrimaryContainer scroll>
        <OpeningDetails />
      </PrimaryContainer>
    </>
  );
}
