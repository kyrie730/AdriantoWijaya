"use client";
import { Environment } from "@/shared/Config";
import { Illustrations } from "@/shared/Constant/Assets";
import { RedirectToWA } from "@/shared/Utility";
import {
  Box,
  Button,
  Text,
  useColorModeValue,
  Image,
  Stack,
  Heading,
} from "@chakra-ui/react";
import { ReactNode, useState } from "react";

interface Collections {
  image: Illustrations;
  title: string;
}

const COLLECTION_LIST: Collections[] = [
  {
    image: Illustrations.HomeBanner,
    title: "Single Crochet Rose Bouquet",
  },
  {
    image: Illustrations.HomeBanner,
    title: "Small Crochet Rose Bouquet",
  },
  {
    image: Illustrations.HomeBanner,
    title: "Full Crochet Rose Bouquet",
  },
];

export default function NewestCollection(): ReactNode {
  return (
    <div className="text-center my-5 gap-10 flex flex-col items-center">
      <div className="text-5xl text-primary">Our Newest Products</div>
      <div className="flex flex-col md:flex-row gap-20 mt-10">
        {COLLECTION_LIST.map((e) => (
          <>
            <Box
              role={"group"}
              p={6}
              maxW={"330px"}
              w={"full"}
              bg={"white"}
              boxShadow={"2xl"}
              rounded={"lg"}
              pos={"relative"}
              zIndex={1}
            >
              <Box rounded={"lg"} mt={-12} pos={"relative"} height={"230px"}>
                <Image
                  rounded={"lg"}
                  height={230}
                  width={282}
                  objectFit={"cover"}
                  src={e.image}
                  alt="#"
                />
              </Box>
              <Stack pt={10} align={"center"}>
                <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
                  {e.title}
                </Heading>
                <Stack direction={"row"} align={"end"}>
                  <Text color={"gray.600"} onClick={() => RedirectToWA()}>
                    More information →
                  </Text>
                </Stack>
              </Stack>
            </Box>
          </>
        ))}
      </div>
    </div>
  );
}
