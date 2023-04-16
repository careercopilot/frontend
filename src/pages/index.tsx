import Header from "@/components/general/Header";
import { Hero } from "@/components/home";

import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <Header />
        <Hero />
      </main>
    </>
  );
}
