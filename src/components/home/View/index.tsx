import { Menu } from "../Menu";
import { Bingsoo } from "../Bingsoo";
import { ToppingsPagination } from "../FloatToppings";
import { AddToppingButton, CopyLink } from "../HomeBottomButton";
import { Text, Flex, IconButton } from "@chakra-ui/react";
import { House } from "lucide-react";
export const OwnerView = () => {
    return ( 
              <>
           <Menu />
           <Text mt="10px">친구들에게 공유해 빙수를 완성시켜 보세요</Text>
           <Bingsoo />
           <Flex mt="4px" justify="center" alignItems="center" >
           <ToppingsPagination />
           <CopyLink />
           </Flex>
           {/* <Bingsoo viewType="owner" /> viewType 넣어서 topping 클릭 여부*/}
         </>
    )
};

export const ChefView = () => {
    const nickname = "희연이";
    return ( 
        <>
          <Flex w="100%" ml="12px" mt="8px">
        <IconButton icon={<House size={28}/>} variant="ghost" aria-label="goMine" color="#777C89"/>
        </Flex>
        <Text mt="10px">사랑하는 {nickname}의 빙수를 완성시켜 주세요</Text>
        <Bingsoo />
        <Flex mt="4px" justify="center" alignItems="center" >
        <ToppingsPagination />
        </Flex>
        <AddToppingButton />
        {/* <Bingsoo viewType="owner" /> viewType 넣어서 topping 클릭 여부*/}
    </>
    )
};

