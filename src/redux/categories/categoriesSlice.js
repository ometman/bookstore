import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  allcategories: [''],
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    currentCategories: (state) => {
      state.allcategories = ['Under Construction'];
    },
  },
});

export const {
  checkCategory,
} = categoriesSlice.actions;
export default categoriesSlice.reducer;
