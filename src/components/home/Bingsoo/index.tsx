import styled from '@emotion/styled';
import { Flex } from '@chakra-ui/react';

export const Bingsoo = () => {
    return ( 
        <Flex w="100%" flexDirection="column" alignItems="center">
            <BingsooContainer>
        ㅎㅇㅇ
        </BingsooContainer>
        </Flex>
    )
};


const BingsooContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 16px;
`;