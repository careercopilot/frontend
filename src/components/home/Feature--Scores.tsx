import Image from "next/image";
import { Button, Text, Title } from "@mantine/core";
import styles from "./Feature--Scores.module.css";
import { staticData } from "@/utils/staticData";
import CompatibilityScores from "../general/analysis/CompatibilityScores";
import CandidateScores from "@/interfaces/CandidateScores";

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
            <Title
              order={4}
              color="secondary"
              weight={700}
              className={styles.title}
            >
              {COMPONENT_DATA.candidate.firstName}{" "}
              {COMPONENT_DATA.candidate.lastName}
            </Title>
            <Text
              color="black.6"
              weight="500"
              size="md"
              className={styles.text}
            >
              {COMPONENT_DATA.position} Position
            </Text>
        </div>
      </div>
      <CompatibilityScores scores={COMPONENT_DATA as CandidateScores} />
    </div>
  );
}

export default FeatureScores;
