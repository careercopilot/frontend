"use client";

import { useUser } from "@/hooks/user.swr";
import { staticData } from "@/utils/staticData";
import { Avatar, Skeleton, Text, Title } from "@mantine/core";
import { useRouter } from "next/navigation";
import React from "react";
import styles from "./ProfileInfoSec.module.css";

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
        <Title fz={28} order={2} fw="bold">
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
                : (
                    (userData.firstName || "")?.charAt(0).toUpperCase() +
                    (userData.lastName || "")?.charAt(0).toUpperCase()
                  )
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
                <Title size={30} fw={700} order={3}>
                  {userData.firstName} {userData.lastName}
                </Title>
                <Text size="md" c="primary" fw={500}>
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
