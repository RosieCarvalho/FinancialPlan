import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

export type Receipt = {
  description: string;
  value: string;
  date: string;
};

interface ReceiptsState {
  receipts: Receipt[];
}

const initialState: ReceiptsState = {
  receipts: [],
};

const receiptsSlice = createSlice({
  name: 'receipts',
  initialState,
  reducers: {
    addReceipt: (state, action: PayloadAction<Receipt>) => {
      state.receipts.push(action.payload);
    },
    removeReceipt: (state, action: PayloadAction<number>) => {
      state.receipts.splice(action.payload, 1);
    },
  },
});

export const { addReceipt, removeReceipt } = receiptsSlice.actions;
export default receiptsSlice.reducer;
