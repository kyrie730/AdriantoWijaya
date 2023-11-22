import { ReactNode } from "react";
import { Text, Card } from "@chakra-ui/react";

export default function Projects(): ReactNode {
  return (
    <div className="text-center">
      <Text className="text-7xl font-bold">My Projects</Text>
      <div className="flex">
        <Card>test</Card>
        <Card>test</Card>
        <Card>test</Card>
      </div>
    </div>
  );
}
