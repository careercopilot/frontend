import GetExtension from "@/components/general/GetExtension";
import { History, ProfileInfoSec } from "@/components/profile/";
import styles from "@/styles/Profile.module.css";
import { redirect } from "next/navigation";
import { cookies } from "next/headers"; // Import cookies
import { ScrollArea } from "@mantine/core";
import PrimaryContainer from "@/components/app/general/PrimaryContainer";

export default function Home() {
  return (
    <>
      <PrimaryContainer scroll >
        <ProfileInfoSec />
        <History />
        {/* <GetExtension /> */}
      </PrimaryContainer>
    </>
  );
}
