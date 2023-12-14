import GetExtension from "@/components/general/GetExtension";
import { History, ProfileInfoSec } from "@/components/profile/";
import styles from "@/styles/Profile.module.css";
import { redirect } from "next/navigation";
import { cookies } from "next/headers"; // Import cookies

export default function Home() {
  const nextCookies = cookies(); // Get cookies object

  if (nextCookies.get("token") == null) {
    redirect("/?modal=login");
  }

  return (
    <>
      <main className={styles.main}>
        <ProfileInfoSec />
        <History />
        <GetExtension />
      </main>
    </>
  );
}
