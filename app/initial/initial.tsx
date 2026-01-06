import { Box, Container, GridItem, SimpleGrid } from '@chakra-ui/react';
import { Header } from '~/components/Header/header';

export function Initial() {
  return (
    <Box as="main" w="100%" minH="100vh">
      <Header />
      <SimpleGrid
        columns={{ base: 2, md: 4 }}
        gap={{ base: '24px', md: '40px' }}
        maxW="container.lg"
      >
        <GridItem colSpan={{ base: 1, md: 1 }}>
          <Box height="20">Column 1</Box>
        </GridItem>
        <GridItem colSpan={{ base: 1, md: 3 }}>
          <Box height="20">Column 2</Box>
        </GridItem>
      </SimpleGrid>
    </Box>
  );
}
