import React from "react";
import { Title, Text, Avatar } from "@mantine/core";
import styles from "./ProfileInfoSec.module.css";
import { staticData } from "@/utils/staticData";
import IUser from "@/interfaces/User";

const { profileInfo: COMPONENT_DATA } = staticData.pages.profile;

function ProfileInfoSec() {
  /** TODO: Fetched Data */
  const userData: IUser = {
    _id: "random",
    firstName: "Raj",
    lastName: "Varsani",
    email: "zairestanton@gmail.com",
  };

  return (
    <div className={styles.container}>
      <Title size={28} order={2} weight="bold">
        {COMPONENT_DATA.title}
      </Title>
      <div className={styles.info}>
        <Avatar
          src={userData.avatar}
          alt={userData.firstName + " " + userData.lastName}
          color="primary"
          size={80}
          radius={25}
        >
          {userData.avatar ? null : userData.firstName[0] + userData.lastName[0]}
        </Avatar>
        <div className={styles.infoText}>
          <Title size={30} weight={700} order={3}>
            {userData.firstName} {userData.lastName}
          </Title>
          <Text size="md" color="primary" weight={500}>
            {userData.email}
          </Text>
        </div>
      </div>
    </div>
  );
}

export default ProfileInfoSec;
