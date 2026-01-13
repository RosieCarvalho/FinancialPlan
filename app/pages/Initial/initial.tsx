import { Box, Container, GridItem, SimpleGrid } from '@chakra-ui/react';
import { AvatarUser } from '~/components/AvatarUser/inde';
import { Header } from '~/components/Header/header';
import { MenuItens } from '~/components/MenuItens';
import { Receipts } from '../Receipts/receipts';

export function Initial() {
  return (
    <Box as="main" w="100%" minH="100vh">
      <Header />
      <SimpleGrid
        columns={{ base: 2, md: 4 }}
        gap={{ base: '24px', md: '40px' }}
        maxW="container.lg"
        mt="8"
        mx="auto"
        px="10"
      >
        <GridItem colSpan={{ base: 1, md: 1 }}>
          <Box
            bg="white"
            alignItems="center"
            justifyContent="center"
            display="flex"
            borderRadius={'6px'}
            flex="1"
            flexDirection="column"
            p="4"
          >
            <AvatarUser />
            <MenuItens
              list={[
                {
                  name: 'Dashboard',
                  icon: 'dashboard',
                },
                {
                  name: 'Profile',
                  icon: 'user',
                },
                { name: 'Financy', icon: 'finance' },
              ]}
            />
          </Box>
        </GridItem>
        <GridItem colSpan={{ base: 1, md: 3 }}>
          <Receipts />
          {/* <Cost/> */}
        </GridItem>
      </SimpleGrid>
    </Box>
  );
}
