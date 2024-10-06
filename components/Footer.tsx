import { Flex, Text, Link, Icon, Box, useColorMode } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const MotionFlex = motion(Flex);
const MotionText = motion(Text);

export const Footer = () => {
  return (
    <MotionFlex
      as="footer"
      width="full"
      py={4}
      px={8}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      justifyContent="space-between"
      alignItems="center"
    >
      <Link href="https://github.com/synrdev/synr-me" isExternal>
        <Icon as={FaGithub} w={6} h={6} />
      </Link>
      <Flex alignItems="center">
        <Text>╰( ◕ ᗜ ◕ )</Text>
        <MotionText
          ml={2}
          animate={{ rotate: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          ╯
        </MotionText>
      </Flex>
      <Box width={6} />
    </MotionFlex>
  );
};
