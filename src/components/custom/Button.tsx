import React from "react";
import { Button as ButtonNative, Text } from "@mantine/core";

function Button({
  buttonprops,
  textprops,
  children,
}: {
  buttonprops?: React.ComponentProps<typeof ButtonNative>;
  textprops?: React.ComponentProps<typeof Text>;
  children: React.ReactNode;
}) {
  return (
    <ButtonNative {...buttonprops}>
      <Text {...textprops}>{children}</Text>
    </ButtonNative>
  );
}

export default Button;
