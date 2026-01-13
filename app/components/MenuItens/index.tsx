import { Icon, Box, Text } from '@chakra-ui/react';
import { BsBank2 } from 'react-icons/bs';
import { FaUserEdit } from 'react-icons/fa';
import { VscGraph } from 'react-icons/vsc';

import type { IconType } from 'react-icons';

type MenuIconKey = 'dashboard' | 'user' | 'finance';

interface MenuItensProps {
  list?: { name: string; icon: MenuIconKey }[];
}

const iconsMap: Record<MenuIconKey, IconType> = {
  dashboard: VscGraph,
  user: FaUserEdit,
  finance: BsBank2,
};

export function MenuItens({ list }: MenuItensProps) {
  if (!list) {
    return <></>;
  }

  return list.map((item) => {
    return (
      <Box
        key={item.name}
        display="flex"
        alignItems="center"
        gap="6"
        w="100%"
        cursor="pointer"
        transition="all 150ms ease"
        borderRadius="3px"
        _hover={{
          transform: 'translateY(-2px)',
          boxShadow: '0 8px 20px rgba(43,47,66,0.12)',
        }}
      >
        <Box
          w="40px"
          h="40px"
          borderRadius="8px"
          m={2}
          display="flex"
          alignItems="center"
          justifyContent="center"
          bg="#f3f4ff"
        >
          <Icon as={iconsMap[item.icon]} boxSize={6} color="#858ebd" />
        </Box>
        <Text color="#2b2f42">{item.name}</Text>
      </Box>
    );
  });
}
