import { Box, Text } from '@chakra-ui/react';

export function Header() {
  return (
    <Box as="header" bg="white" h="60px" display="flex">
      <Text
        fontSize="2xl"
        fontWeight="bold"
        color="blue.500"
        alignSelf="center"
      >
        Financy Plan
      </Text>
    </Box>
  );
}
