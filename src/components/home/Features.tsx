import React from "react";
import Link from "next/link";
import { Button, Loader, Text, Title } from "@mantine/core";
import styles from "./Features.module.css";
import FeatureSummary from "./Feature--Summary";
import FeatureScores from "./Feature--Scores";
import { useUser } from "@/hooks/user.swr";

import { staticData } from "@/utils/staticData";
const { features: COMPONENT_DATA } = staticData.pages.index;

function Features() {
  const { userData, isUserDataLoading, errorFetchingUserData } = useUser();

  const FEATURE_DSIPLAY_COMPONENTS = React.useMemo(() => {
    return {
      profileSummary: FeatureSummary,
      compatibilityScores: FeatureScores,
      more: () => (
        <div>
          {isUserDataLoading ? (
            <Loader />
          ) : userData && !errorFetchingUserData ? (
            <Button
              color="primary"
              size="lg"
              component="a"
              href={COMPONENT_DATA.examplesData.more.loggedInButtonLink}
              target="_blank"
            >
              {COMPONENT_DATA.examplesData.more.loggedInButton}
            </Button>
          ) : (
            <Link
              href={{
                query: {
                  modal: COMPONENT_DATA.examplesData.more.buttonLink,
                },
              }}
              tabIndex={-1}
            >
              <Button color="primary" size="lg">
                {COMPONENT_DATA.examplesData.more.button}
              </Button>
            </Link>
          )}
        </div>
      ),
    };
  }, [userData, isUserDataLoading, errorFetchingUserData]);

  return (
    <div className={styles.container}>
      <div className={styles.titleSec}>
        <Text fw="500" size="xxl" ta="center">
          {COMPONENT_DATA.subTitle}
        </Text>
        <Title
          c="secondary"
          // size="var(--h1)"
          fw={700}
          order={2}
          ta="center"
        >
          {COMPONENT_DATA.title}
        </Title>
      </div>
      <div className={styles.featuresTimeline}>
        {Object.keys(COMPONENT_DATA.features).map((key: string, index) => {
          const FeaturComponent =
            FEATURE_DSIPLAY_COMPONENTS[
              key as keyof typeof FEATURE_DSIPLAY_COMPONENTS
            ];
          return (
            <div className={styles.feature} key={key}>
              <div className={styles.lineSec}>
                <div className={styles.dot}></div>
                {index !== Object.keys(COMPONENT_DATA.features).length - 1 && (
                  <div className={styles.line}></div>
                )}
              </div>
              <div className={styles.content}>
                <div className={styles.featureTitleSec}>
                  <Title order={3} c="secondary" fw={700}>
                    {COMPONENT_DATA.features[key].title}
                  </Title>
                  <Text
                    size={"lg"}
                    c="black.4"
                    className={styles.featureDescription}
                  >
                    {COMPONENT_DATA.features[key].description}
                  </Text>
                </div>
                <>
                  <FeaturComponent />
                </>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Features;
