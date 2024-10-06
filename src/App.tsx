import { ChakraProvider, Box, extendTheme } from "@chakra-ui/react";
import { Header } from "./components/Header";
import { MainContent } from "./components/MainContent";
import { Footer } from "./components/Footer";
import { ThreeBackground } from "./components/ThreeBackground";

const theme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box position="relative" minHeight="100vh" min-width="100vw">
        <ThreeBackground />
        <Header />
        <MainContent />
        <Footer />
      </Box>
    </ChakraProvider>
  );
}

export default App;
