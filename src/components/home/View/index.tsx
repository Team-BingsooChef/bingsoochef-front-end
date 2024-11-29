import { Menu } from "../Menu";
import { Bingsoo } from "../Bingsoo";
import { ToppingsPagination } from "../Toppings";
import { Text, Flex } from "@chakra-ui/react";
export const OwnerView = () => {
    return ( 
        <>
           <Menu />
           <Text mt="10px">친구들에게 공유해 빙수를 완성시켜 보세요</Text>
           <Bingsoo />
           <Flex mt="4px" justify="center" alignItems="center" >
           <ToppingsPagination />
           </Flex>
           {/* <Bingsoo viewType="owner" /> viewType 넣어서 topping 클릭 여부*/}
        </>
    )
};

export const ChefView = () => {
    return ( 
        <>
        ㅎㅇ</>
    )
};