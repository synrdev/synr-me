import { useState } from "react";
import { Flex, Heading, IconButton, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";
import NextLink from "next/link";
import { Sidebar } from "./Sidebar";
import { FaBars } from "react-icons/fa";

const MotionFlex = motion(Flex);

export const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <>
      <MotionFlex
        as="header"
        position="fixed"
        width="full"
        top={0}
        py={4}
        px={8}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        zIndex={10}
        alignItems="center"
      >
        <NextLink href="https://synr.me/" passHref legacyBehavior>
          <Heading
            as="a"
            bgGradient="linear(to-l, #7928CA, #FF0080)"
            bgClip="text"
            fontSize="2xl"
            fontWeight="bold"
            letterSpacing="tight"
            cursor="pointer"
          >
            Synr
          </Heading>
        </NextLink>
        <IconButton
          ml="auto"
          aria-label="DarkMode Switch"
          icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          onClick={toggleColorMode}
        />
        <IconButton
          ml={4}
          aria-label="Toggle Sidebar"
          icon={<FaBars />}
          onClick={toggleSidebar}
        />
      </MotionFlex>
      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
    </>
  );
};
