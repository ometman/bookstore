import { createSlice } from '@reduxjs/toolkit';
// import bookItems from '../../components/bookItems';
import { allbooks } from '../../components/bookItems';

const initialState = {
  allbooks,
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      const bookData = action.payload;
      state.allbooks.unshift({
        id: 34,
        category: 'Action',
        title: bookData.title,
        author: bookData.author,
        chapter: 'Chapter 3',
        comments: [],
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
