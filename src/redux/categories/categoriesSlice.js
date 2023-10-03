import { createSlice } from '@reduxjs/toolkit';

const initialState = {

};

const categoriesSlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    // addBook: (state) => {
    //   state.bookItems = [];
    // },
    // removeBook: (state, action) => {
    //   const itemId = action.payload;
    //   state.bookItems = state.bookItems.filter((item) => item.id !== itemId);
    // },
  },
});

// console.log(booksSlice)

export const {
  addCategory,
} = categoriesSlice.actions;
export default categoriesSlice.reducer;
