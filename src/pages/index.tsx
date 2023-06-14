import { Modal } from "@mantine/core";
import { useRouter } from "next/router";
import { Hero, Features, AuthModal } from "@/components/home";
import { useCookies } from "react-cookie";

import styles from "@/styles/Home.module.css";

import { staticData } from "@/utils/staticData";
const PAGE_DATA = staticData.pages.index;

export default function Home() {
  const router = useRouter();

  const handleCloseModal = () => {
    router.push({
      query: {},
    });
  };

  return (
    <>
      <main className={styles.main}>
        <Modal
          size="auto"
          classNames={{
            body: styles.modal,
            content: styles.modalContent,
          }}
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
            closeModal={handleCloseModal}
          />
        </Modal>
        <Hero />
        <Features />
      </main>
    </>
  );
}
