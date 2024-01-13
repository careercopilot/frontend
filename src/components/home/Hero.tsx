import { staticData } from "@/utils/staticData";
import { Button, Title } from "@mantine/core";
import Image from "next/image";
import styles from "./Hero.module.css";

const { hero: COMPONENT_DATA } = staticData.pages.index;
const { icons: ICONS } = staticData.general;

function Hero() {
  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <Image
          src={COMPONENT_DATA.background.src}
          alt={COMPONENT_DATA.background.alt}
          loading="eager"
          priority
          fill
        />
      </div>
      <div className={styles.content}>
        <div className={styles.titleSec}>
          <Button
            size="compact-md"
            leftSection={
              <Image
                src={ICONS.chrome.src}
                alt={ICONS.chrome.alt}
                width={20}
                height={20}
              />
            }
            component="a"
            href={COMPONENT_DATA.ctaLink}
            target="_blank"
            variant="outline"
          >
            {COMPONENT_DATA.chip}
          </Button>
          <Title order={1} fw={800} ta="center">
            {COMPONENT_DATA.title}
          </Title>
          <Button
            size="md"
            className={styles.button}
            component="a"
            href={COMPONENT_DATA.ctaLink}
            target="_blank"
            mt={20}
          >
            {COMPONENT_DATA.cta}
          </Button>
        </div>
        <Image
          src={COMPONENT_DATA.cover.src}
          alt={COMPONENT_DATA.cover.alt}
          className={styles.cover}
          loading="eager"
          priority
        />
      </div>
    </div>
  );
}

export default Hero;
