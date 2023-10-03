import { createSlice } from '@reduxjs/toolkit';
import bookItems from '../../components/bookItems';

const initialState = {
  bookItems,
  bookQty: 0,
  isLoading: true,
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state) => {
      state.bookItems = [];
    },
    removeBook: (state, action) => {
      const itemId = action.payload;
      state.bookItems = state.bookItems.filter((item) => item.id !== itemId);
    },
  },
});

console.log(booksSlice);

export const {
  addBook, removeItem, editBook,
} = booksSlice.actions;
export default booksSlice.reducer;
