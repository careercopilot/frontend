"use client";

import { AuthModal, Features, Hero } from "@/components/home";
import styles from "@/styles/Home.module.css";
import { Modal } from "@mantine/core";
import { useRouter, useSearchParams } from "next/navigation";

import { staticData } from "@/utils/staticData";
import Pricing from "@/components/home/Pricing";
import Header from "@/components/general/Header";
import Footer from "@/components/general/Footer";
const PAGE_DATA = staticData.pages.index;

export default function Home() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleCloseModal = () => {
    router.push("/");
  };

  return (
    <>
      <Header />
      <main className={styles.main}>
        <Modal
          size="auto"
          classNames={{
            body: styles.modal,
            content: styles.modalContent,
          }}
          opened={
            Object.keys(PAGE_DATA.modalAllowedRouteValues).includes(
              searchParams.get("modal") as string
            ) || false
          }
          onClose={handleCloseModal}
          withCloseButton={false}
          centered
        >
          <AuthModal
            variant={
              searchParams.get(
                "modal"
              ) as keyof typeof PAGE_DATA.modalAllowedRouteValues
            }
            closeModal={handleCloseModal}
          />
        </Modal>
        <Hero />
        <Pricing />
        <Features />
      </main>
      <Footer />
    </>
  );
}
