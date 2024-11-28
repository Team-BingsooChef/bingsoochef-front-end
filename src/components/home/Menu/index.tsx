import {
    Menu as CustomedMenu,
    MenuButton,
    MenuList,
    MenuItem,
    Flex,
    Box
  } from "@chakra-ui/react";
  import { IconButton } from "@chakra-ui/icons";
  import { Settings, IceCreamBowl, Search, RefreshCcw, MenuIcon, ChefHat } from "lucide-react";
  
  export const Menu = () => {
    const nickName = "자고싶어핑";
    return (
      <Flex width="100%" justifyContent="flex-end" p={1}>
        <CustomedMenu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<MenuIcon size="28" />}
            variant="unstyled"
            size="lg"
          />
          <MenuList bg="#00181B" color="white" borderColor="gray.700">
            {/* 첫 번째 MenuItem은 텍스트처럼 표시 */}
            <MenuItem
              isDisabled
              fontSize="24px"
              bg="#00181B"
              _hover={{ bg: "transparent" }}
              _disabled={{ opacity: 1, cursor: "default", color: "#1581A3" }}
            mb="10px"
            >
              {nickName} 님
            </MenuItem>
            <MenuItem
              icon={<Settings size="20" color="#777C89" />}
              bg="#00181B"
              _hover={{ bg: "gray.700" }}
            >
              계정 설정
            </MenuItem>
            <MenuItem
              icon={<IceCreamBowl size="20" color="#777C89" />}
              bg="#00181B"
              _hover={{ bg: "gray.700" }}
            >
              내가 만든 토핑
            </MenuItem>
            <MenuItem
              icon={<Search size="20" color="#777C89" />}
              bg="#00181B"
              _hover={{ bg: "gray.700" }}
            >
              빙수 찾아 떠나기
            </MenuItem>
            <MenuItem
              bg="#00181B"
              icon={<RefreshCcw size="20" color="#777C89" />}
              _hover={{ bg: "gray.700" }}
            >
              빙수 맛 변경하기
            </MenuItem>
            {/* 구분선 추가 */}
            <Box
              as="hr"
              borderColor="gray.700"
              borderWidth="1px"
              my={2} /* 위아래 여백 */
            />
            <MenuItem
              bg="#00181B"
              icon={<ChefHat size="20" color="#777C89" />}
              _hover={{ bg: "gray.700" }}
            >
              포셰프 소개
            </MenuItem>
          </MenuList>
        </CustomedMenu>
      </Flex>
    );
  };
  