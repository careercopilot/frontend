import Image from "next/image";
import { Button, Text, Title } from "@mantine/core";
import styles from "./Features.module.css";
import { staticData } from "@/utils/staticData";

const { features: COMPONENT_DATA } = staticData.pages.index;
const { icons: ICONS } = staticData.general;

function Features() {
  return (
    <div className={styles.container}>
      <div className={styles.titleSec}>
        <Title order={4} align="center">
          {COMPONENT_DATA.subTitle}
        </Title>
        <Title order={2} align="center">
          {COMPONENT_DATA.title}
        </Title>
      </div>
      <div className={styles.featuresTimeline}>
        {Object.keys(COMPONENT_DATA.features).map((key: string) => {
          return (
            <div className={styles.feature} key={key}>
              <div className={styles.lineSec}>
                <div className={styles.dot}></div>
                <div className={styles.line}></div>
              </div>
              <div className={styles.content}>
                <div className={styles.featureTitleSec}>
                  <Title order={4}>{COMPONENT_DATA.features[key].title}</Title>
                  <Text>{COMPONENT_DATA.features[key].description}</Text>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Features;
