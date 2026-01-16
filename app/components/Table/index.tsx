import { GridItem, SimpleGrid, Text } from '@chakra-ui/react';
import { Children } from 'react';

interface tableProps {
  numberCOlumns: number;
  headersTable: {
    title: string;
    colorText?: string;
    mdItemCol?: number;
  }[];
  linesTable: React.ReactNode[][];
}

export const Table = ({
  headersTable,
  numberCOlumns,
  linesTable,
}: tableProps) => {
  const headerTable = () => {
    return headersTable.map((header) => (
      <GridItem
        colSpan={{ base: 1, md: header.mdItemCol || 1 }}
        key={header.title}
      >
        <Text color={header.colorText || '#2b2f42'}>{header.title}</Text>
      </GridItem>
    ));
  };

  const collunsTableRender = () => {
    return linesTable.flatMap((row, rowIndex) =>
      row.map((cell, colIndex) => (
        <GridItem
          colSpan={{ base: 1, md: headersTable[colIndex]?.mdItemCol || 1 }}
          key={`${rowIndex}-${colIndex}`}
        >
          {cell}
        </GridItem>
      )),
    );
  };

  return (
    <SimpleGrid
      columns={{ base: numberCOlumns || 4, md: 5 }}
      gap={{ base: '24px', md: '10px' }}
      // mt="8"
      borderRadius={6}
      pt="5"
      mx="auto"
      px="10"
      bg="white"
      alignItems={'center'}
    >
      {headerTable()}
      {collunsTableRender()}
    </SimpleGrid>
  );
};
