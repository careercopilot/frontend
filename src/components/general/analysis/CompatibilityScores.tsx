import CandidateScores from "@/interfaces/CandidateScores";
import { staticData } from "@/utils/staticData";
import { Divider, Progress, Text, Title } from "@mantine/core";
import Image from "next/image";
import styles from "./CompatibilityScores.module.css";

const { compatibilityScores: COMPONENT_DATA } = staticData.components.anylysis;

function CompatibilityScores({ scores }: { scores: CandidateScores }) {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Title className={styles.score} order={4} c="black.4">
          {scores.positionScore}%
        </Title>
        <Text className={styles.scoreText} c="black.8">
          {COMPONENT_DATA.title}
        </Text>
      </div>

      <Divider orientation="horizontal" className={styles.horizontalDivider} />
      <Divider orientation="vertical" className={styles.verticalDivider} />
      <div className={styles.right}>
        {scores.skillScores.map((skill, index) => (
          <div key={index} className={styles.skillScore}>
            <Image src={skill.icon} alt={skill.name} className={styles.icon} />
            <div className={styles.skillScoreContent}>
              <Title order={4} size={"md"} fw={600} c="secondary">
                {skill.name}
              </Title>
              <Progress
                value={skill.score}
                size={10}
                radius="xl"
                color={
                  COMPONENT_DATA.scoreColors[
                    Math.floor(
                      (skill.score / 100) * COMPONENT_DATA.scoreColors.length
                    )
                  ]
                }
                aria-label={COMPONENT_DATA.accessibility.ariaLabel}
                aria-valuemin={COMPONENT_DATA.accessibility.ariaValueMin}
                aria-valuemax={COMPONENT_DATA.accessibility.ariaValueMax}
                aria-valuenow={skill.score}
              />
            </div>
            <Text className={styles.scoreValue} c="black.4" fw={"600"}>
              {skill.score}%
            </Text>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CompatibilityScores;
