import { Modal } from "@mantine/core";
import { useRouter } from "next/router";
import Header from "@/components/general/Header";
import Footer from "@/components/general/Footer";
import { Hero, Features } from "@/components/home";

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
            PAGE_DATA.modalAllowedRouteValues[router.query.modal as string] === true
          }
          onClose={handleCloseModal}
          title="Authentication"
          centered
        >
          {router.query.modal}
        </Modal>
        <Header />
        <Hero />
        <Features />
        <Footer />
      </main>
    </>
  );
}
