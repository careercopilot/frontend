import { ProfileInfoSec, History } from "@/components/profile/";
import GetExtension from "@/components/general/GetExtension";

import styles from "@/styles/Profile.module.css";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <ProfileInfoSec />
        <History />
        <GetExtension />
      </main>
    </>
  );
}

export const getServerSideProps = async (ctx: any) => {
  const { req, res } = ctx;

  const cookie = req.headers.cookie;

  if (!cookie) {
    res.writeHead(302, { Location: "/" });
    res.end();
    return { props: {} };
  }

  return {
    props: {},
  };
};
