import { Modal } from "@mantine/core";
import { useRouter } from "next/router";
import { Hero, Features, AuthModal } from "@/components/home";
import ProfileInfoSec from "@/components/profile/ProfileInfoSec";

import styles from "@/styles/Profile.module.css";


export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <ProfileInfoSec />
      </main>
    </>
  );
}
