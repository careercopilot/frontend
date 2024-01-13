import { staticData } from "@/utils/staticData";
import { Text, Title } from "@mantine/core";
import Image from "next/image";
import CompatibilityScores from "../general/analysis/CompatibilityScores";
import styles from "./Feature--Scores.module.css";

const { compatibilityScores: COMPONENT_DATA } =
  staticData.pages.index.features.examplesData;

function FeatureScores() {
  return (
    <div className={styles.container}>
      <div className={styles.profileContainer}>
        <Image
          src={COMPONENT_DATA.candidate.image}
          alt={COMPONENT_DATA.candidate.firstName}
          className={styles.image}
        />
        <div className={styles.titles}>
          <Title order={4} c="secondary" fw={700} className={styles.title}>
            {COMPONENT_DATA.candidate.firstName}{" "}
            {COMPONENT_DATA.candidate.lastName}
          </Title>
          <Text c="black.6" fw="500" size="md" className={styles.text}>
            {COMPONENT_DATA.position} Position
          </Text>
        </div>
      </div>
      <CompatibilityScores scores={COMPONENT_DATA} />
    </div>
  );
}

export default FeatureScores;
