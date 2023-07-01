import type { NextPage } from "next";
import Head from "next/head";
import {
  Box,
  Flex,
  Text,
  Link,
  Icon,
  Image,
  Stack,
  HStack,
  Spacer,
  Heading,
  IconButton,
  useColorMode,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { SiZenn } from "react-icons/si";

const Home: NextPage = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box>
      <Head>
        <title>Synr</title>
        <meta name="description" content="さねらのサイト" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex as="header" position="fixed" width="full" top={0} py={4} px={8}>
        <Link href="https://synr.me/">
          <Heading
            bgGradient="linear(to-l, #7928CA, #FF0080)"
            bgClip="text"
            fontSize="2xl"
            fontWeight="bold"
            letterSpacing="tight"
          >
            Synr
          </Heading>
        </Link>
        <Spacer />
        <IconButton
          aria-label="DarkMode Switch"
          icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          onClick={toggleColorMode}
        />
      </Flex>
      <Box className="main">
        <Flex>
          <Spacer></Spacer>
          <Image
            src="https://avatars.githubusercontent.com/u/138139785?v=4"
            alt="synr"
            borderRadius="full"
            loading="lazy"
            maxW="300"
          />
          <Spacer></Spacer>
        </Flex>
        <Stack spacing={6} mt={"16"} align="center">
          <Heading>さねら</Heading>
          <HStack>
            <Link href="https://twitter.com/synrdev">
              <Icon as={FaTwitter} w={6} h={6} />
            </Link>
            <Link href="https://github.com/synrdev">
              <Icon as={FaGithub} w={6} h={6} />
            </Link>
            <Link href="https://zenn.dev/synrdev">
              <Icon as={SiZenn} w={6} h={6} />
            </Link>
          </HStack>
        </Stack>
      </Box>
      <Flex as="footer" position="fixed" width="full" bottom={0} py={4} px={8}>
        <Link href="https://github.com/synrdev/synr-me">
          <Icon as={FaGithub} w={6} h={6} />
        </Link>
        <Spacer></Spacer>
        <Text>╰( ◕ ᗜ ◕ )</Text>
        <Text mr={6} className="hand">
          ╯
        </Text>
        <Spacer></Spacer>
      </Flex>
    </Box>
  );
};

export default Home;
