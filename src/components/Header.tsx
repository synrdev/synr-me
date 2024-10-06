import { useState } from "react";
import { Flex, Heading, IconButton } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Sidebar } from "./Sidebar";
import { FaBars } from "react-icons/fa";

const MotionFlex = motion(Flex);

export const Header = () => {
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
        bg="transparent"
      >
        <Heading
          as="a"
          href="/"
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="text"
          fontSize="2xl"
          fontWeight="bold"
          letterSpacing="tight"
          cursor="pointer"
        >
          Synr
        </Heading>
        <IconButton
          ml="auto"
          aria-label="Toggle Sidebar"
          icon={<FaBars />}
          onClick={toggleSidebar}
          variant="ghost"
          _hover={{ bg: "transparent" }}
          color="white"
        />
      </MotionFlex>
      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
    </>
  );
};
