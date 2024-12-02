import { Input } from "@chakra-ui/react";

interface SettingInputProps {
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

export const PasswordInput: React.FC<SettingInputProps> = ({
  value,
  handleChange,
  placeholder,
}) => {
  return (
    <>
      <Input
        variant="filled"
        type="password"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        _placeholder={{ opacity: 1, color: "gray.500" }}
        size="sm"
        width={"100%"}
        height="60px"
        borderRadius="16px"
        backgroundColor="#A4ABBC"
        mb="24px"
        _hover={{ backgroundColor: "#A4ABBC" }} // Keeps the background white on hover
        _focus={{ backgroundColor: "#A4ABBC", boxShadow: "none" }} // Keeps the background white on focus
      />
    </>
  );
};

export const GreyInput: React.FC<SettingInputProps> = ({
  value,
  handleChange,
  placeholder,
}) => {
  return (
    <>
      <Input
        variant="filled"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        _placeholder={{ opacity: 1, color: "gray.500" }}
        size="sm"
        width={"100%"}
        height="60px"
        borderRadius="16px"
        backgroundColor="#A4ABBC"
        mb="24px"
        _hover={{ backgroundColor: "#A4ABBC" }} // Keeps the background white on hover
        _focus={{ backgroundColor: "#A4ABBC", boxShadow: "none" }} // Keeps the background white on focus
      />
    </>
  );
};
