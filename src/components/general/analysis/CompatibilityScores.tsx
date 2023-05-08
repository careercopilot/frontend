import Image from "next/image";
import { Button, Text, Title, Divider, Progress } from "@mantine/core";
import styles from "./CompatibilityScores.module.css";
import { staticData } from "@/utils/staticData";
import CandidateScores from "@/interfaces/CandidateScores";

const { compatibilityScores: COMPONENT_DATA } = staticData.components.anylysis;

function CompatibilityScores({ scores }: { scores: CandidateScores }) {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Title className={styles.score} order={4} color="black.4">
          {scores.positionScore}%
        </Title>
        <Text className={styles.scoreText} color="black.8">
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
              <Title order={4} size={"md"} weight={600} color="secondary">
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
            <Text className={styles.scoreValue} color="black.4" weight={"600"}>
              {skill.score}%
            </Text>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CompatibilityScores;
