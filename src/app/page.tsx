// "use client";

import styles from "@/styles/Home.module.css";

import Footer from "@/components/general/Footer";
import Header from "@/components/general/Header";
import { Features, Hero } from "@/components/home";
import Pricing from "@/components/home/Pricing";
import { staticData } from "@/utils/staticData";
const PAGE_DATA = staticData.pages.index;

export default function Home() {
  // const router = useRouter();
  // const searchParams = useSearchParams();

  // const handleCloseModal = () => {
  //   router.push("/");
  // };

  return (
    <>
      <Header />
      <main className={styles.main}>
        {/* <Modal
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
        </Modal> */}
        <Hero />
        <Pricing />
        <Features />
      </main>
      <Footer />
    </>
  );
}
