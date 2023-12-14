import { staticData } from "@/utils/staticData";
import { Text, Title } from "@mantine/core";
import Image from "next/image";
import styles from "./Feature--Summary.module.css";

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
          <Title order={4} c="secondary" fw={700} className={styles.title}>
            {COMPONENT_DATA.firstName} {COMPONENT_DATA.lastName}
          </Title>
          <Text c="primary" fw="500" size="md" className={styles.text}>
            {COMPONENT_DATA.position}
          </Text>
        </div>
        <Text size={"lg"} c="black.4" className={styles.text}>
          {COMPONENT_DATA.summary}
        </Text>
      </div>
    </div>
  );
}

export default FeatureSummary;
