import Image from "next/image";
import { Button, Title } from "@mantine/core";
import styles from "./Hero.module.css";
import { staticData } from "@/utils/staticData";

const { features: COMPONENT_DATA } = staticData.pages.index;
const { icons: ICONS } = staticData.general;

function Features() {
  return <div className={styles.container}>
    Features
  </div>;
}

export default Features;
