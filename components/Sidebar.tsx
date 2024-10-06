import { Box, IconButton, Text, VStack } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  return (
    <Box
      position="fixed"
      right={isOpen ? 0 : "-100%"}
      top={0}
      width="250px"
      height="100vh"
      bg="gray.700"
      color="white"
      transition="right 0.3s ease"
      zIndex={20}
      p={4}
      boxShadow="lg"
      borderRadius="md"
    >
      <IconButton
        aria-label="Close Sidebar"
        icon={<CloseIcon />}
        onClick={onClose}
        mb={4}
        alignSelf="flex-end"
      />
      <VStack spacing={4} align="start" mt={8}>
        <Text fontSize="lg" fontWeight="bold">
          Nothing
        </Text>
      </VStack>
    </Box>
  );
};
