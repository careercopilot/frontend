import Image from "next/image";
import { Button, Text, Title } from "@mantine/core";
import styles from "./Feature--Summary.module.css";
import { staticData } from "@/utils/staticData";

const { profileSummary: COMPONENT_DATA } =
  staticData.pages.index.features.examplesData;

function FeatureSummary() {
  return (
    <div className={styles.container}>
      <Image
        src={COMPONENT_DATA.image}
        alt={COMPONENT_DATA.firstName}
        className={styles.image}
      />
      <div className={styles.content}>
        <div className={styles.titles}>
          <Title
            order={4}
            color="secondary"
            weight={700}
            className={styles.title}
          >
            {COMPONENT_DATA.firstName} {COMPONENT_DATA.lastName}
          </Title>
          <Text color="primary" weight="500" size="md" className={styles.text}>
            {COMPONENT_DATA.position}
          </Text>
        </div>
        <Text size={"lg"} color="black.4" className={styles.text}>
          {COMPONENT_DATA.summary}
        </Text>
      </div>
    </div>
  );
}

export default FeatureSummary;
