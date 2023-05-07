import { Modal } from "@mantine/core";
import { useRouter } from "next/router";
import Header from "@/components/general/Header";
import Footer from "@/components/general/Footer";
import { Hero, Features, AuthModal } from "@/components/home";

import styles from "@/styles/Home.module.css";

import { staticData } from "@/utils/staticData";
const PAGE_DATA = staticData.pages.index;

export default function Home() {
  const router = useRouter();

  const handleCloseModal = () => {
    router.push({
      pathname: "/",
      query: {},
    });
  };

  return (
    <>
      <main className={styles.main}>
        <Modal
          opened={
            Object.keys(PAGE_DATA.modalAllowedRouteValues).includes(
              router.query.modal as string
            ) || false
          }
          onClose={handleCloseModal}
          withCloseButton={false}
          centered
        >
          <AuthModal
            variant={
              router.query
                .modal as keyof typeof PAGE_DATA.modalAllowedRouteValues
            }
          />
        </Modal>
        <Header />
        <Hero />
        <Features />
        <Footer />
      </main>
    </>
  );
}
