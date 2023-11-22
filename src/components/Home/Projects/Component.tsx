import { ReactNode } from "react";
import { Text, Box, Image, Stack, Heading, SimpleGrid } from "@chakra-ui/react";
import { Images } from "@/shared/Constant/Assets";

interface Projects {
  image: Images;
  title: string;
  description: string;
  url?: string;
}

const PROJECT_LIST: Projects[] = [
  {
    image: Images.PortofolioProject,
    title: "Portofolio",
    description:
      "Portofolio website made using NextJs as its framework and libraries such as Chakra UI, tailwind, and more. It is a responsive website which you can open from your desktop, phone, and tablet.",
  },
  {
    image: Images.DGiftProject,
    title: "D'Gift",
    description:
      "Portofolio website made using NextJs as its framework and libraries such as Chakra UI, tailwind, and more. It is a responsive website which you can open from your desktop, phone, and tablet.",
  },
  {
    image: Images.VerihubsRevamp,
    title: "Verihubs",
    description:
      "Revamped Verihubs landing page using wordpress as framework and GA4 as analytics. Made using HTML and SASS. It is a responsive website which you can open from your desktop, phone, and tablet.",
  },
];

export default function Projects(): ReactNode {
  return (
    <div className="m-2 p-2 md:p-7 md:m-7 flex flex-col gap-5">
      <Text className="text-7xl font-bold">My Projects</Text>
      <SimpleGrid columns={{ base: 1, lg: 3 }} spacing={{ base: 5, md: 8 }}>
        {PROJECT_LIST.map((e) => (
          <>
            <Box
              rounded={"md"}
              p={6}
              className="border-solid border border-primary bg-background-light"
            >
              <Stack>
                <Box mt={-6} mx={-6} pos={"relative"}>
                  <Image src={e.image} alt={e.title} className="rounded-md" />
                </Box>
                <Heading fontSize={"2xl"} className="text-primary">
                  {e.title}
                </Heading>
                <Text className="text-secondary">{e.description}</Text>
              </Stack>
            </Box>
          </>
        ))}
      </SimpleGrid>
      <div className="flex flex-row-reverse">
        <Box
          as="a"
          href="#projects"
          display="inline-block"
          transition="transform 0.2s"
          _hover={{
            transform: "scale(1.1)",
            textDecoration: "underline",
            cursor: "pointer",
          }}
        >
          See More →
        </Box>
      </div>
    </div>
  );
}
