import { Text } from "@chakra-ui/react";
export interface ToppestTextProps {
    text?: string;
    color?: string;
}

export const ToppestText = ({ text, color }: ToppestTextProps) => {
    return <Text fontSize="20px" mt="40px" color={color}>{text}</Text>;
};

