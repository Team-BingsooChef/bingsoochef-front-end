import { Text } from "@chakra-ui/react";
export interface ToppestTextProps {
    text?: string;
    color?: string;
}

export const ToppestText = ({ text, color }: ToppestTextProps) => {
    return <Text size="24px" color={color}>{text}</Text>;
};

