import { staticData } from "@/utils/staticData";
import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";
import HeaderAvatar from "./HeaderAvatar";

const generalData = staticData.general;

function Header() {
  return (
    <nav className={styles.container}>
      <Link href="/">
        <Image
          src={generalData.logo.src}
          alt={generalData.logo.alt}
          className={styles.logo}
          loading="eager"
        />
        <Image
          src={generalData.logoIcon.src}
          alt={generalData.logoIcon.alt}
          className={styles.logoIcon}
        />
      </Link>
      <HeaderAvatar />
    </nav>
  );
}

export default Header;
