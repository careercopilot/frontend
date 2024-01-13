import { staticData } from "@/utils/staticData";
import {
  Badge,
  Box,
  Button,
  Container,
  Flex,
  Grid,
  NumberFormatter,
  Paper,
  Text,
  Title,
} from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";
import Image from "next/image";
import styles from "./Hero.module.css";

const { pricing: COMPONENT_DATA } = staticData.pages.index;
const { content: GENERAL_CONTENT } = staticData.general;
const { icons: ICONS } = staticData.general;

function PricingCard({ plan }: { plan: (typeof COMPONENT_DATA)["plans"][0] }) {
  return (
    <Paper
      shadow="xl"
      p={32}
      bg={plan.highlight ? "primary" : "transparent"}
      pos="relative"
      style={{
        transform: `scale(${plan.scale || 1})`,
      }}
    >
      <Flex direction="column" align="center" gap={28} w={280}>
        {/* <Grid columns={2} gutter={16} align="center" w="100%"> */}
        {/* <Grid.Col span="content"> */}
        <Box
          style={{
            display: "grid",
            gridTemplateColumns: "auto 1fr",
          }}
        >
          <Image height={60} width={60} src={plan.icon} alt={plan.title} />
          {/* </Grid.Col> */}
          {/* <Grid.Col span="content"> */}
          <Flex direction="column" gap={-5}>
            <Text
              fw={500}
              size="sm"
              c={plan.highlight ? "primary.1" : "dark.3"}
            >
              {plan.badge}
            </Text>
            <Text fw={600} size="lg" c={plan.highlight ? "white" : "dark"}>
              {plan.title}
            </Text>
          </Flex>
        </Box>
        {/* </Grid.Col> */}
        {/* </Grid> */}
        <Text c={plan.highlight ? "primary.0" : "dark.3"} fw={500}>
          {plan.description}
        </Text>
        <Flex w="100%" align="center" gap={4}>
          <Text
            size={"var(--h2)"}
            fw={700}
            c={plan.highlight ? "white" : "dark"}
            ta="start"
          >
            <NumberFormatter value={plan.price} decimalScale={2} prefix="$" />
          </Text>
          <Text size="lg" c={plan.highlight ? "primary.0" : "gray"}>
            {COMPONENT_DATA.monthly}
          </Text>
        </Flex>
        <Flex direction="column" gap={8} w="100%">
          {plan.features.map((feature, index) => (
            <Flex align="center" gap={8} key={index} w="100%">
              <IconCheck
                color={
                  plan.highlight
                    ? "--mantine-color-primary-0"
                    : "--mantine-color-primary-5"
                }
                size={20}
              />
              <Text c={plan.highlight ? "primary.0" : "dark"}>{feature}</Text>
            </Flex>
          ))}
        </Flex>
        <Flex direction="column" w="100%">
          <Button
            variant={plan.highlight ? "white" : "filled"}
            size="lg"
            style={{
              borderRadius: 990,
            }}
            mt={20}
          >
            {COMPONENT_DATA.getStarted}
          </Button>
        </Flex>
        {plan.popular && (
          <Badge
            variant="light"
            color="white"
            size="lg"
            pos="absolute"
            top={16}
            right={16}
          >
            {GENERAL_CONTENT.popular}
          </Badge>
        )}
      </Flex>
    </Paper>
  );
}

function Pricing() {
  return (
    <Container className={styles.container} my={80}>
      <Flex direction="column" gap={64}>
        <Flex direction="column" gap={6} align="center">
          <Badge variant="light" size="xl">
            {COMPONENT_DATA.badge}
          </Badge>
          <Title c="secondary" fw={700} order={2} ta="center">
            {COMPONENT_DATA.title}
          </Title>
        </Flex>
        <Flex direction="row" align="center" justify="center" gap={14}>
          {COMPONENT_DATA.plans.map((plan, index) => (
            <PricingCard plan={plan} key={index} />
          ))}
        </Flex>
      </Flex>
    </Container>
  );
}

export default Pricing;
