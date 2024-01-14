import styles from "@/styles/Home.module.css";

import Footer from "@/components/general/Footer";
import Header from "@/components/general/Header";
import { AuthModal, Features, Hero } from "@/components/home";
import Pricing from "@/components/home/Pricing";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Hero />
        <Pricing />
        <Features />
      </main>
      <Footer />
      <Suspense fallback={<></>}>
        <AuthModal />
      </Suspense>
    </>
  );
}
