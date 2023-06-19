import React from "react";
import { Title, Text, Avatar, Skeleton } from "@mantine/core";
import { useRouter } from "next/router";
import { useUser } from "@/hooks/user.swr";

import styles from "./ProfileInfoSec.module.css";

import { staticData } from "@/utils/staticData";
const { profileInfo: COMPONENT_DATA } = staticData.pages.profile;

function ProfileInfoSec() {
  const { push } = useRouter();
  const { userData, errorFetchingUserData, isUserDataLoading } = useUser();

  React.useEffect(() => {
    if (errorFetchingUserData) {
      push("/");
    }
  }, [errorFetchingUserData, push]);

  return (
    <>
      <div className={styles.container}>
        <Title size={28} order={2} weight="bold">
          {COMPONENT_DATA.title}
        </Title>
        <div className={styles.info}>
          {errorFetchingUserData || isUserDataLoading ? (
            <Skeleton height={80} width={80} radius={25} />
          ) : (
            <Avatar
              src={userData.avatar}
              alt={userData.firstName + " " + userData.lastName}
              color="primary"
              size={80}
              radius={25}
            >
              {userData.avatar
                ? null
                : (userData.firstName?.[0] + userData.lastName?.[0])
                    .toString()
                    .toUpperCase()}
            </Avatar>
          )}

          <div className={styles.infoText}>
            {errorFetchingUserData || isUserDataLoading ? (
              <>
                <Skeleton height={25} width={160} mb={"md"} />
                <Skeleton height={16} width={100} />
              </>
            ) : (
              <>
                <Title size={30} weight={700} order={3}>
                  {userData.firstName} {userData.lastName}
                </Title>
                <Text size="md" color="primary" weight={500}>
                  {userData.email}
                </Text>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileInfoSec;
