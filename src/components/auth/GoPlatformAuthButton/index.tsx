import { Button } from "@chakra-ui/react";
import { MouseEventHandler, ReactNode } from "react";
interface GoPlatformAuthButtonProps {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const GoPlatformAuthButton: React.FC<GoPlatformAuthButtonProps> = ({ children, onClick }) => {
 return (
    <Button
      onClick={onClick} // onClick 이벤트 연결
      bg="#C5EFFF"
      color="#05518F"
      width="100%"
      fontSize="3xl"
      fontWeight={500}
      height="60px"
      borderRadius="16px"

    
    >
      {children}
    </Button>
  );
};

