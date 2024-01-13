"use client";

import type { BoxProps } from "@mantine/core";
import { Box, useMantineTheme } from "@mantine/core";

function SecondaryContainer({
  children,
  transperent = false,
  ...props
}: {
  children: any;
  transperent?: boolean;
} & BoxProps) {
  const theme = useMantineTheme();
  const containerProps = {
    p: 16,
    ...props,
    style: {
      ...(transperent ? {} : theme.other.box.secondary),
      ...props.style,
    },
  };

  return <Box {...containerProps}>{children}</Box>;
}

export default SecondaryContainer;
