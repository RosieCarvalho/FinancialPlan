import {
  Box,
  Button,
  Checkbox,
  CloseButton,
  Field,
  Flex,
  Icon,
  IconButton,
  Input,
  Text,
} from '@chakra-ui/react';
import { FaPlusCircle } from 'react-icons/fa';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Table } from '~/components/Table';
import { useDispatch, useSelector } from 'react-redux';
import { addReceipt, removeReceipt } from '~/store/receiptsSlice';
type ReceiptFormData = {
  description: string;
  value: string;
  date: string;
};

export const Receipts = () => {
  const [showForm, setShowForm] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ReceiptFormData>();
  const dispatch = useDispatch();
  const receipts = useSelector((state) => state.receipts.receipts);
  const totalReceipts = receipts?.reduce(
    (sum, receipt) => sum + parseFloat(receipt.value),
    0,
  );
  const linesTable = () => {
    return receipts?.map((receipt, index) => [
      <Text color="#4caf50">{receipt.description}</Text>,
      <Text color="#4caf50">{receipt.value}</Text>,
      <Text color="#4caf50">{receipt.date}</Text>,
      <Button
        size="sm"
        colorPalette={'red'}
        variant="ghost"
        onClick={() => dispatch(removeReceipt(index))}
      >
        Excluir
      </Button>,
    ]);
  };

  const onSubmit = (data: ReceiptFormData) => {
    console.log('New receipt:', data);
    // Aqui você pode adicionar lógica para salvar o recibo
    dispatch(addReceipt(data));
    reset();
    setShowForm(false);
  };

  const newAddReceipt = () => {
    return [
      <Field.Root key="description" invalid={!!errors.description}>
        <Field.Label>Descrição</Field.Label>
        <Input
          color={'#2b2f42'}
          {...register('description', { required: 'Descrição é obrigatória' })}
          placeholder="Descrição do recibo"
        />
        <Field.ErrorText>{errors.description?.message}</Field.ErrorText>
      </Field.Root>,
      <Field.Root key="value" invalid={!!errors.value}>
        <Field.Label>Valor</Field.Label>
        <Input
          color={'#2b2f42'}
          {...register('value', { required: 'Valor é obrigatório' })}
          placeholder="Valor"
          type="number"
        />
        <Field.ErrorText>{errors.value?.message}</Field.ErrorText>
      </Field.Root>,
      <Field.Root key="date" invalid={!!errors.date}>
        <Field.Label>Data de Recebimento</Field.Label>
        <Input
          color={'#2b2f42'}
          {...register('date', { required: 'Data é obrigatória' })}
          placeholder="Data"
          type="date"
        />
        <Field.ErrorText>{errors.date?.message}</Field.ErrorText>
      </Field.Root>,
      <Flex key="actions" alignItems="center" gap={1} pt="6">
        <Button
          colorPalette="blue"
          variant="ghost"
          alignItems={'center'}
          size={'sm'}
          onClick={handleSubmit(onSubmit)}
        >
          Salvar
        </Button>
        <CloseButton
          onClick={() => setShowForm(false)}
          colorPalette="red"
          variant={'ghost'}
        />

        <Checkbox.Root>
          <Checkbox.HiddenInput />
          <Checkbox.Control>
            <Checkbox.Indicator />
          </Checkbox.Control>
          <Checkbox.Label color={'#213123'}>Recebo todos mês</Checkbox.Label>
        </Checkbox.Root>
      </Flex>,
    ];
  };

  return (
    <>
      <Flex justifyContent="space-between" alignItems="center">
        <Text
          fontSize="2xl"
          fontWeight="bold"
          color={'gray.900'}
          pl={2}
          paddingRight={3}
        >
          Receita Mensal
        </Text>
        <Text color="green.500" mt="2">
          Total:R$ {totalReceipts.toFixed(2)}
        </Text>
      </Flex>
      <Table
        headersTable={[
          {
            title: 'Descrição',
            mdItemCol: 2,
          },
          {
            title: 'Valor mensal',
            mdItemCol: 1,
          },
          {
            title: 'Data Recebimento',
            mdItemCol: 1,
          },
          {
            title: 'Ações',
            mdItemCol: 1,
          },
        ]}
        numberCOlumns={4}
        linesTable={[
          ...linesTable(),
          ...(showForm ? [newAddReceipt()] : []),
          [
            <IconButton
              aria-label={showForm ? 'close add receipt' : 'add receipt'}
              size="lg"
              variant={'ghost'}
              onClick={() => setShowForm(true)}
            >
              <Icon as={FaPlusCircle} size="lg" w={33} h={33} />
            </IconButton>,
          ],
        ]}
      />
    </>
  );
};
