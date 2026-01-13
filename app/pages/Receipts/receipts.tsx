import {
  Button,
  Field,
  Grid,
  GridItem,
  Icon,
  IconButton,
  Input,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import { FaPlusCircle } from 'react-icons/fa';

export const Receipts = () => {
  const newAddReceipt = () => {
    return (
      <>
        <GridItem colSpan={{ base: 1, md: 2 }}>
          <Field.Root>
            <Input />
            <Field.ErrorText>This is an error text</Field.ErrorText>
          </Field.Root>
        </GridItem>
        <GridItem colSpan={{ base: 1, md: 1 }}>
          <Field.Root>
            <Input placeholder="valor" />
            <Field.ErrorText>This is an error text</Field.ErrorText>
          </Field.Root>
        </GridItem>
        <GridItem colSpan={{ base: 1, md: 1 }}>
          <Field.Root>
            <Input placeholder="data que recebe" />
            <Field.ErrorText>This is an error text</Field.ErrorText>
          </Field.Root>
        </GridItem>
        <GridItem colSpan={{ base: 1, md: 1 }}>
          <Button colorPalette="blue" variant="subtle" size={'sm'}>
            Save
          </Button>
        </GridItem>
      </>
    );
  };

  const handleHeaderTable = () => {
    return (
      <>
        <GridItem colSpan={{ base: 1, md: 2 }}>
          <Text color="#2b2f42">Descrição</Text>
        </GridItem>
        <GridItem colSpan={{ base: 1, md: 1 }}>
          <Text color="#2b2f42">Valor mensal</Text>
        </GridItem>
        <GridItem colSpan={{ base: 1, md: 1 }}>
          <Text color="#2b2f42">Data Recebimento</Text>
        </GridItem>
        <GridItem colSpan={{ base: 1, md: 1 }}>Acões</GridItem>
      </>
    );
  };
  return (
    // transformar depois em um comoponente reutilizável
    <SimpleGrid
      columns={{ base: 4, md: 5 }}
      gap={{ base: '24px', md: '10px' }}
      mt="8"
      pt="5"
      mx="auto"
      px="10"
      bg="white"
      alignItems={'center'}
    >
      {handleHeaderTable()}
      {/* Exemplo de dados estáticos */}
      <GridItem colSpan={{ base: 1, md: 2 }}>
        <Text color="#4caf50">Salário</Text>
      </GridItem>
      <GridItem colSpan={{ base: 1, md: 1 }}>
        <Text color="#4caf50">R$ 5.000,00</Text>
      </GridItem>
      <GridItem colSpan={{ base: 1, md: 1 }}>
        <Text color="#4caf50">05/10/2024</Text>
      </GridItem>
      <GridItem colSpan={{ base: 1, md: 1 }}>
        <Button size="sm" colorScheme="red">
          Excluir
        </Button>
      </GridItem>
      {newAddReceipt()}
      <GridItem colSpan={{ base: 1, md: 2, mb: 4 }}>
        <IconButton aria-label="add receipt" size="lg" variant={'ghost'}>
          <Icon as={FaPlusCircle} size="lg" w={33} h={33} />
        </IconButton>
      </GridItem>
    </SimpleGrid>
  );
};
