import { ProfileInfoSec, History } from "@/components/profile/";

import styles from "@/styles/Profile.module.css";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <ProfileInfoSec />
        <History />
      </main>
    </>
  );
}
