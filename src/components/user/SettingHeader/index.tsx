import { Text, IconButton, Flex } from "@chakra-ui/react";
import { House } from "lucide-react";

interface SettingHeaderProps {
    text: string;
}

export const SettingHeader = ({ text }: SettingHeaderProps) => {
    return(
        <Flex justify="space-between">
        <Text color="black" size="32px">{text}</Text>
        <IconButton icon={<House size={28}/>} variant="ghost" aria-label="goMine" color="black"/>
        </Flex>
    )
};