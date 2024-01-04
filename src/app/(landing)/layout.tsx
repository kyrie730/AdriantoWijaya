"use client";

import {
  Box,
  IconButton,
  Stack,
  Collapse,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { PropsWithChildren, ReactNode } from "react";
import Footer from "@/shared/Component/Footer";
import { getWhatsappURL } from "@/shared/Utility";

export default function WithSubnavigation({
  children,
}: PropsWithChildren): ReactNode {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <div className="flex bg-background m-2 p-2 text-primary md:px-7 md:m-7 border-solid border-black-1">
        <div className="flex w-full items-center gap-10">
          <div className="md:hidden">
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? (
                  <CloseIcon w={6} h={6} color={"#f7f8fa"} />
                ) : (
                  <HamburgerIcon w={6} h={6} color={"#f7f8fa"} />
                )
              }
              variant={"ghost"}
              aria-label={"Toggle Navigation"}
            />
          </div>
          <p className="text-primary text-5xl">Awe.</p>
          <div className="hidden w-1/2 md:flex ml-3">
            <DesktopNav />
          </div>
        </div>
      </div>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>

      <div>{children}</div>
      <Footer />
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
            target={navItem.isNewTab ? "_blank" : "_self"}
            _hover={{
              textDecoration: "none",
            }}
            className="p-2 text-xl text-secondary hover:text-primary-light"
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
    <Stack className="p-4 md:hidden bg-background">
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href, isNewTab }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Box
        as="a"
        href={href ?? "#"}
        target={isNewTab ? "_blank" : "_self"}
        _hover={{
          textDecoration: "none",
        }}
        className="py-2 justify-between items-center"
      >
        <p className="text-xl text-secondary font-semibold">{label}</p>
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
  isNewTab?: boolean;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Projects",
    href: "/projects",
  },
  {
    label: "Contact",
    href: getWhatsappURL(),
    isNewTab: true,
  },
];
