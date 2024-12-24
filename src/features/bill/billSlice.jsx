import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  customerName: '',
  items: [{ name: '', price: '', quantity: 1 }],
};

const billSlice = createSlice({
  name: 'bill',
  initialState,
  reducers: {
    setCustomerName: (state, action) => {
      state.customerName = action.payload;
    },
    addItem: (state) => {
      state.items.push({ name: '', price: '', quantity: 1 });
    },
    updateItem: (state, action) => {
      const { index, field, value } = action.payload;
      state.items[index][field] = value;
    },
    resetBill: () => initialState,
  },
});

export const { setCustomerName, addItem, updateItem, resetBill } = billSlice.actions;
export default billSlice.reducer;