import { Menu } from "../Menu";
import { Bingsoo } from "../Bingsoo";
import { ToppingsPagination } from "../FloatToppings";
import { AddTopping, CopyLink } from "../HomeBottomButton";
import { Text, Flex } from "@chakra-ui/react";
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
        <Menu />
        <Text mt="10px">사랑하는 {nickname}의 빙수를 완성시켜 주세요</Text>
        <Bingsoo />
        <Flex mt="4px" justify="center" alignItems="center" >
        <ToppingsPagination />
        </Flex>
        <AddTopping />

        {/* <Bingsoo viewType="owner" /> viewType 넣어서 topping 클릭 여부*/}
     </>
    )
};