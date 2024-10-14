import {
  Box,
  Flex,
  Image,
  Stack,
  HStack,
  Heading,
  Text,
  Link,
  useBreakpointValue,
} from "@chakra-ui/react";

import { FaTwitter, FaGithub } from "react-icons/fa";
import { SiZenn } from "react-icons/si";
import { motion } from "framer-motion";
import { IconType } from "react-icons";

const MotionBox = motion(Box);
const MotionImage = motion(Image);
const MotionHeading = motion(Heading);

const SocialIcon = ({
  icon: Icon,
  href,
  size,
}: {
  icon: IconType;
  href: string;
  size: number;
}) => (
  <Link href={href} isExternal>
    <MotionBox whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
      <Icon size={size} />
    </MotionBox>
  </Link>
);

export const MainContent = () => {
  const iconSize = useBreakpointValue({ base: 20, md: 24 });
  const iconSpacing = useBreakpointValue({ base: 2, md: 4 });

  return (
    <MotionBox
      flex={1}
      display="flex"
      alignItems="center"
      justifyContent="center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      p={8}
      minHeight="100vh"
      bg="rgba(26, 32, 44, 0.7)"
      backdropFilter="blur(10px)"
    >
      <Flex
        direction={{ base: "column", md: "row" }}
        alignItems="center"
        justifyContent="center"
        maxW="800px"
        w="full"
      >
        <MotionImage
          src="/icon.jpg"
          alt="synr"
          borderRadius="full"
          width={200}
          height={200}
          mb={{ base: 8, md: 0 }}
          mr={{ md: 8 }}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        />
        <Stack
          spacing={6}
          align={{ base: "center", md: "flex-start" }}
          ml={{ md: 8 }}
        >
          <Box textAlign={{ base: "center", md: "left" }}>
            <MotionHeading
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              fontFamily="Georgia, serif"
            >
              さねら
            </MotionHeading>
            <Box width="fit-content" mx={{ base: "auto", md: "0" }} mt={4}>
              <HStack
                spacing={iconSpacing}
                width="100%"
                justifyContent="space-between"
              >
                <SocialIcon
                  key="twitter"
                  icon={FaTwitter}
                  href="https://x.com/synr_27"
                  size={iconSize || 20}
                />
                <SocialIcon
                  key="github"
                  icon={FaGithub}
                  href="https://github.com/synrdev"
                  size={iconSize || 20}
                />
                <SocialIcon
                  key="zenn"
                  icon={SiZenn}
                  href="https://zenn.dev/synrdev"
                  size={iconSize || 20}
                />
              </HStack>
            </Box>
          </Box>
          <Text fontSize="lg" textAlign={{ base: "center", md: "left" }}>
            やっほー、さねらです！
            <br />
            プログラマーを目指して勉強中。
          </Text>
        </Stack>
      </Flex>
    </MotionBox>
  );
};
