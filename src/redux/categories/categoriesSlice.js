import { createSlice } from '@reduxjs/toolkit';
import categoryItems from '../../components/categoryItems';

const initialState = {
  allcategories: categoryItems,
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    currentCategories: (state) => {
      state.allcategories = [{
        category: 'Under Construction',
      }];
    },
  },
});

export const {
  currentCategories,
} = categoriesSlice.actions;
export default categoriesSlice.reducer;
