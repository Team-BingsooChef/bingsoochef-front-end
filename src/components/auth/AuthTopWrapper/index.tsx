import { ToppestText } from "../ToppestText";
import { Flex, Box } from "@chakra-ui/react";
import { MoveLeft } from "lucide-react";

export interface AuthTopWrapperProps {
  text?: string;
  color?: string;
}

export const AuthTopWrapper = ({ text, color }: AuthTopWrapperProps) => {
  return (
    <Flex w="100%" mt="40px" position="relative" >
        <Box>
      <MoveLeft size={28} color={color} />
      </Box>
      <Box position="absolute" right="calc((100% - 60px) / 2)" >
      <ToppestText text={text} color={color} />
      </Box>
    </Flex>
  );
};
