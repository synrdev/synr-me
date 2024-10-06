import type { NextPage } from "next";
import Head from "next/head";
import { Box } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { MainContent } from "../components/MainContent";
import { Footer } from "../components/Footer";

const Home: NextPage = () => {
  return (
    <Box minHeight="100vh" display="flex" flexDirection="column">
      <Head>
        <title>Synr</title>
        <meta name="description" content="さねらのサイト" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <MainContent />
      <Footer />
    </Box>
  );
};

export default Home;
