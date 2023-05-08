import React from "react";
import { Title, Text, Avatar } from "@mantine/core";
import styles from "./ProfileInfoSec.module.css";
import { staticData } from "@/utils/staticData";
import User from "@/interfaces/User";

const { profileIno: COMPONENT_DATA } = staticData.pages.profile;

function ProfileInfoSec() {
  /** TODO: Fetched Data */
  const userData: User = {
    _id: "random",
    fName: "Raj",
    lName: "Varsani",
    email: "zairestanton@gmail.com",
  };

  return (
    <div className={styles.container}>
      <Title size={28} order={2} weight="bold">
        {COMPONENT_DATA.title}
      </Title>
      <div className={styles.info}>
        <Avatar
          src={userData.image}
          alt={userData.fName + " " + userData.lName}
          color="primary"
          size={80}
          radius={25}
        >
          {userData.image ? null : userData.fName[0] + userData.lName[0]}
        </Avatar>
        <div className={styles.infoText}>
          <Title size={30} weight={700} order={3}>
            {userData.fName} {userData.lName}
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
