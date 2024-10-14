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
    url: "https://adriantowijaya.vercel.app/",
  },
  {
    image: Images.DGiftProject,
    title: "D'Gift",
    description:
      "Portofolio website made using NextJs as its framework and libraries such as Chakra UI, tailwind, and more. It is a responsive website which you can open from your desktop, phone, and tablet.",
    url: "https://d-gift.vercel.app/",
  },
  {
    image: Images.VerihubsRevamp,
    title: "Verihubs",
    description:
      "Revamped Verihubs landing page using wordpress as framework and GA4 as analytics. Made using HTML and SASS. It is a responsive website which you can open from your desktop, phone, and tablet.",
    url: "https://verihubs.com/",
  },
  {
    image: Images.GaHelpdesk,
    title: "Binus GA Helpdesk",
    description:
      "My first fullstack application, made using React as its front end framework, .Net as its back end framework (with the help of .Net internal library and tools), and SQL Server for database. GA Helpdesk is an internal landing page for General Affairs issues.",
    url: "",
  },
];

export default function Projects(): ReactNode {
  return (
    <div className="m-2 p-2 md:p-7 md:m-7 flex flex-col gap-5">
      <Text className="text-7xl font-bold text-white">My Projects</Text>
      <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={{ base: 5, md: 8 }}>
        {PROJECT_LIST.map((e) => (
          <>
            <Box
              rounded={"md"}
              p={6}
              className="border-solid border border-primary bg-background-light shadow-primary"
            >
              <Stack>
                <Box
                  className="group relative cursor-pointer"
                  mt={-6}
                  mx={-6}
                  pos={"relative"}
                  as="a"
                  href={e.url}
                  target="_blank"
                >
                  <span className="absolute left-1/2 top-1/2 z-10 hidden text-2xl text-white font-extrabold -translate-x-1/2 -translate-y-1/2 transform text-center transition group-hover:block">
                    View Project
                  </span>
                  <Image
                    src={e.image}
                    alt={e.title}
                    className="rounded-md transition-all group-hover:brightness-50"
                  />
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
    </div>
  );
}
