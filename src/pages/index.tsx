import Header from "@/components/general/Header";
import Footer from "@/components/general/Footer";
import { Hero, Features } from "@/components/home";

import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <Header />
        <Hero />
        <Features />
        <Footer />
      </main>
    </>
  );
}
