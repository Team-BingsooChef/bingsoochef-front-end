import { 
    Input, Text
 } from "@chakra-ui/react";


interface IvoryInputProps {
    value: string;
    text: string;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
}

const IvoryInput: React.FC<IvoryInputProps> = ({ value, text, handleChange, placeholder }) => {
  return (
    <>
      <Text mb='8px' color="#03526B" fontWeight="100" alignSelf="start"  ml="48px">{text}</Text>
      <Input
      variant="filled"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        _placeholder={{ opacity: 1, color: 'gray.500' }}
        size='sm'
        width={"100%"}
        height="60px"
        borderRadius="16px"
        backgroundColor="#FDF0CC"
        mb="24px"
        _hover={{ backgroundColor: "FDF0CC" }} // Keeps the background white on hover
        _focus={{ backgroundColor: "FDF0CC", boxShadow: "none" }} // Keeps the background white on focus
      />
    </>
  );
};

export default IvoryInput;
