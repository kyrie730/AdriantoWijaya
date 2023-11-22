"use client";

import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Heading,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import { PropsWithChildren, ReactNode } from "react";
import Image from "next/image";
import { Images } from "@/shared/Constant/Assets";

export default function WithSubnavigation({
  children,
}: PropsWithChildren): ReactNode {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      {/* <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
        direction={{ base: "row-reverse", md: "row" }}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
          justify={"end"}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <div className="relative w-">
            <Image alt="D'Gift" fill src={Images.DgiftLogo} priority={true} />
          </div>

          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>
      </Flex> */}

      <div className="flex bg-black text-primary h-24 py-2 px-4 border-solid border-black-1">
        <div className="flex w-full items-center gap-10">
          <div className="md:hidden">
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? (
                  <CloseIcon w={8} h={8} color={"#c6a548"} />
                ) : (
                  <HamburgerIcon w={8} h={8} color={"#c6a548"} />
                )
              }
              variant={"ghost"}
              aria-label={"Toggle Navigation"}
            />
          </div>
          <div className="flex gap-1 items-center">
            <div className="relative py-3">
              <Image
                alt="D'Gift"
                height={70}
                width={70}
                src={Images.DgiftLogo}
                priority={true}
              />
            </div>
            <p className="text-primary text-3xl">D&apos;Gift</p>
          </div>
          <div className="hidden w-1/2 md:flex ml-3">
            <DesktopNav />
          </div>
        </div>
      </div>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>

      <div className="m-2 p-2 md:m-7 md:p-7">{children}</div>
    </Box>
  );
}

const DesktopNav = () => {
  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Box
            as="a"
            href={navItem.href}
            _hover={{
              textDecoration: "none",
            }}
            className="p-2 text-base text-primary hover:text-primary-light"
          >
            {navItem.label}
          </Box>
        </Box>
      ))}
    </Stack>
  );
};

const MobileNav = () => {
  return (
    <Stack className="p-4 md:hidden bg-black">
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Box
        as="a"
        href={href ?? "#"}
        _hover={{
          textDecoration: "none",
        }}
        className="py-2 justify-between items-center"
      >
        <p className="text-primary font-semibold">{label}</p>
      </Box>

      <Collapse in={isOpen} animateOpacity className="mt-0">
        <Stack
          borderColor={useColorModeValue("gray.200", "gray.700")}
          className="mt-2 pl-4 border-l-2 border-solid"
        >
          {children &&
            children.map((child) => (
              <Box as="a" key={child.label} py={2} href={child.href}>
                {child.label}
              </Box>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Home",
    href: "",
  },
  {
    label: "Products",
    href: "",
  },
];
