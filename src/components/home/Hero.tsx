import Image from "next/image";
import { Button, Title } from "@mantine/core";
import styles from "./Hero.module.css";
import { staticData } from "@/utils/staticData";

const { hero: COMPONENT_DATA } = staticData.pages.index;
const { icons: ICONS } = staticData.general;

function Hero() {
  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <Image
          src={COMPONENT_DATA.background.src}
          alt={COMPONENT_DATA.background.alt}
          fill
        />
      </div>
      <div className={styles.content}>
        <div className={styles.titleSec}>
          <Title order={1} weight={800} align="center">
            {COMPONENT_DATA.title}
          </Title>
          <Button
            size="md"
            leftIcon={<Image src={ICONS.chrome.src} alt={ICONS.chrome.alt} />}
            className={styles.button}
          >
            {COMPONENT_DATA.cta}
          </Button>
        </div>
        <Image
          src={COMPONENT_DATA.cover.src}
          alt={COMPONENT_DATA.cover.alt}
          className={styles.cover}
        />
      </div>
    </div>
  );
}

export default Hero;
