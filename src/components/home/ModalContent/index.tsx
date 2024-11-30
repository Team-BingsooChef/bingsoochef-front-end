import { Box, Text } from "@chakra-ui/react";
import { useModalHeightContext } from '../../../contexts';

export const ModalContent = () => {
  const { height } = useModalHeightContext();
  return (
    <Box h={height}>
      <Text>Modal Content</Text>
    </Box>
  );
};
