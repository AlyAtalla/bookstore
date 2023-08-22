import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import BookstoreAPI from '../services/BookstoreAPI';

export const fetchBooks = createAsyncThunk('book/fetchBooks', async () => {
  const response = await BookstoreAPI.getAllBooksFromAPI();
  return response.data;
});

const bookSlice = createSlice({
  name: 'book',
  initialState: [], // Change the initial state to an empty array
  reducers: {
    // ...
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.fulfilled, (state, action) => {
        return action.payload;
      });
  },
});

export default bookSlice.reducer;
