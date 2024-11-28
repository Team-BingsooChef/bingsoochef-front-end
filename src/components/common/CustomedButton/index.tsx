import { Button } from "@chakra-ui/react";
import { MouseEventHandler, ReactNode } from "react";
interface BlueRectangleButtonProps {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const BlueRectangleButton: React.FC<BlueRectangleButtonProps> = ({ children, onClick }) => {
 return (
    <Button
      onClick={onClick} // onClick 이벤트 연결
      bg="#03526B"
      color="#FDF0CC"
      width="100%"
      fontSize="3xl"
      fontWeight={500}
      height="60px"
      borderRadius="16px"
      _hover={{
        bg: "#02445A", // hover 시 배경색
        color: "#FDF0CC", // hover 시 텍스트 색상 유지
      }}
      _active={{
        transform: "scale(0.98)", // 클릭할 때 버튼 살짝 줄어듦
      }}
    >
      {children}
    </Button>
  );
};

export const LightBlueRectangleButton: React.FC<BlueRectangleButtonProps> = ({ children, onClick }) => {
  return (
     <Button
       onClick={onClick} // onClick 이벤트 연결
       bg="#2589FF"
       color="#ffffff"
       width="100%"
       fontSize="3xl"
       fontWeight={500}
       height="60px"
       borderRadius="16px"
       _hover={{
       bg:"#2589FF",
       color:"#ffffff"
       }}
       _active={{
         transform: "scale(0.98)", // 클릭할 때 버튼 살짝 줄어듦
       }}
     >
       {children}
     </Button>
   );
 };
 
 