import PrimaryContainer from "@/components/app/general/PrimaryContainer";
import OpeningsListing from "@/components/app/openings/OpeningsListing";

export default function Home() {
  return (
    <>
      <PrimaryContainer scroll transperent>
        <OpeningsListing />
      </PrimaryContainer>
    </>
  );
}
