import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const appId = 'd3OejDnC5bc9GJM6JdNl';
const baseURL = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${appId}/books/`;

export const fetchBooksByThunk = createAsyncThunk(
  'books/fetchBooksByThunk',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(baseURL);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('Sorry, Something went wrong');
    }
  },
);

export const addBookByThunk = createAsyncThunk(
  'books/addBookByThunk',
  async (book, thunkAPI) => {
    try {
      await axios.post(baseURL, book);
      const response = await thunkAPI.dispatch(fetchBooksByThunk());
      return response.payload;
    } catch (error) {
      return thunkAPI.rejectWithValue('Sorry, Something went wrong');
    }
  },
);

export const removeBookByThunk = createAsyncThunk(
  'books/removeBookByThunk',
  async (itemId, thunkAPI) => {
    try {
      await axios.delete(`${baseURL}${itemId}`);
      const response = await thunkAPI.dispatch(fetchBooksByThunk());
      return response.payload;
    } catch (error) {
      return thunkAPI.rejectWithValue('Sorry, Something went wrong');
    }
  },
);

const initialState = {
  books: {},
  isLoading: false,
  error: undefined,
};

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooksByThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchBooksByThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.books = action.payload;
      })
      .addCase(fetchBooksByThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });

    builder.addCase(addBookByThunk.fulfilled, (state, action) => {
      state.books = action.payload;
    });

    builder.addCase(removeBookByThunk.fulfilled, (state, action) => {
      state.books = action.payload;
    });
  },
});

export default booksSlice.reducer;
