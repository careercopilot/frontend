import { CHROME_EXTENSION_URL, staticData } from "@/utils/staticData";
import { Button, Flex, Text, Title } from "@mantine/core";
import { IconBrandLinkedin, IconCheck } from "@tabler/icons-react";
import Image from "next/image";
import styles from "./ChromeExtension.module.css";

const { chromeExtension: COMPONENT_DATA } = staticData.pages;
const { icons: ICONS } = staticData.general;

function ChromeExtension() {
  return (
    <Flex h="100%" direction="column" align="center" justify="center" gap={40}>
      <Flex direction="column" gap={8} align="center" maw={900}>
        <Title order={1} size={45} className={styles.animatedIntro}>
          {COMPONENT_DATA.title[0]}
          <Flex display="inline-flex" align="center" gap={4} c="primary">
            {COMPONENT_DATA.title[1]}
            <IconBrandLinkedin size={60} />
          </Flex>
          {COMPONENT_DATA.title[2]}
        </Title>
        <Text c="dark.4" ta="center" size="lg" className={styles.animatedIntro}>
          {COMPONENT_DATA.description}
        </Text>
      </Flex>
      <Flex>
        <Button
          className={styles.animatedIntro}
          size="md"
          leftSection={
            <Image
              src={ICONS.chrome.src}
              alt={ICONS.chrome.alt}
              width={20}
              height={20}
            />
          }
          component="a"
          href={CHROME_EXTENSION_URL}
          target="_blank"
          variant="filled"
        >
          {COMPONENT_DATA.cta}
        </Button>
      </Flex>
      <Flex direction="column" gap={6}>
        {COMPONENT_DATA.benefits.map((benefit, index) => (
          <Flex
            key={index}
            align="center"
            gap={8}
            className={styles.animatedIntro}
            style={{
              "--animation-duration": `${index * 0.2 + 0.4}s`,
            }}
          >
            <IconCheck color="var(--mantine-color-primary-5)" size={20} />
            <Text>{benefit}</Text>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
}

export default ChromeExtension;
