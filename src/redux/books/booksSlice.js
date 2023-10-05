import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import { allbooks } from '../../components/bookItems';
import allcategories from '../../components/categoryItems';

const initialState = {
  allbooks,
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      const bookData = action.payload;
      state.allbooks.push({
        itemId: uuidv4(),
        title: bookData.title,
        author: bookData.author,
        category: allcategories[0].category,
      });
    },
    removeBook: (state, action) => {
      const itemId = action.payload;
      state.allbooks = state.allbooks.filter((item) => item.itemId !== itemId);
    },
  },
});

export const {
  addBook, removeBook,
} = booksSlice.actions;
export default booksSlice.reducer;
