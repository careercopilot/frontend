import { staticData } from "@/utils/staticData";
import { Button, Flex, SimpleGrid, Text, Title } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import styles from "./ContactUs.module.css";

const { contactUs: COMPONENT_DATA } = staticData.pages;
const { icons: ICONS } = staticData.general;

function ContactUs() {
  return (
    <Flex h="100%" direction="column" align="center" justify="center" gap={40}>
      <Flex direction="column" gap={8} align="center" maw={500}>
        <Title order={1} size={45} className={styles.animatedIntro}>
          {COMPONENT_DATA.title[0]}
          <Text span c="primary" inherit>
            {COMPONENT_DATA.title[1]}
          </Text>
        </Title>
        <Text c="dark.4" ta="center" size="lg" className={styles.animatedIntro}>
          {COMPONENT_DATA.description}
        </Text>
      </Flex>
      <SimpleGrid
        cols={{
          sm: 1,
          lg: 2,
        }}
        spacing={16}
      >
        {COMPONENT_DATA.links.map((benefit, index) => (
          <Button
            component={Link}
            href={benefit.href}
            key={index}
            passHref
            className={styles.animatedIntro}
            style={{
              "--animation-duration": `${index * 0.2 + 0.2}s`,
            }}
            leftSection={<Image src={benefit.src} alt={benefit.label} />}
            variant="outline"
            size="lg"
          >
            <Text>{benefit.label}</Text>
          </Button>
        ))}
      </SimpleGrid>
    </Flex>
  );
}

export default ContactUs;
