import { Avatar, Box, Text } from '@chakra-ui/react';

export function AvatarUser() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      gap="2"
      mb="4"
    >
      <Avatar.Root size={'lg'}>
        <Avatar.Fallback name="rosie carvalho" />
        <Avatar.Image src="https://bit.ly/sage-adebayo" />
      </Avatar.Root>
      <Text color="#3A3F63" fontSize="18px" fontWeight="bold">
        Rosie Carvalho
      </Text>
    </Box>
  );
}
