import { ScrollArea } from "@mantine/core";
import { cookies } from "next/headers"; // Import cookies

export default function Home() {
  return (
    <>
      <ScrollArea h="100%" p={0}>
        <h1>Content Here</h1>
      </ScrollArea>
    </>
  );
}
