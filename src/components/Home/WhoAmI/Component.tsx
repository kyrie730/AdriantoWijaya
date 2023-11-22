"use client";

import { Box, SimpleGrid, Stat, StatLabel, StatNumber } from "@chakra-ui/react";
import moment from "moment";

interface StatsCardProps {
  title: string;
  stat: string;
}
function StatsCard(props: StatsCardProps) {
  const { title, stat } = props;
  return (
    <Stat
      px={{ base: 4, md: 8 }}
      py={10}
      shadow={"xl"}
      border={"1px solid"}
      rounded={"lg"}
      className="border-primary"
    >
      <StatLabel fontWeight={"medium"} isTruncated className="text-secondary">
        {title}
      </StatLabel>
      <StatNumber
        fontSize={"2xl"}
        fontWeight={"medium"}
        className="text-secondary"
      >
        {stat}
      </StatNumber>
    </Stat>
  );
}

export default function WhoAmI() {
  return (
    <Box className="bg-background-light p-4 md:p-14">
      <SimpleGrid columns={{ base: 2, lg: 4 }} spacing={{ base: 2, md: 8 }}>
        <StatsCard
          title={"Software Engineering"}
          stat={`${moment()
            .diff(moment("2022-02-01", "YYYY-MM-DD"), "years")
            .toString()} Years of Experience`}
        />
        <StatsCard title={"Proficient at"} stat={`Frontend Development`} />
        <StatsCard title={"Proficient at"} stat={`Fullstack Development`} />
        <StatsCard title={"Learning"} stat={"Backend Development"} />
      </SimpleGrid>
    </Box>
  );
}
