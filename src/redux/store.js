import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './bookSlice'; // Import your bookSlice reducer

const store = configureStore({
  reducer: {
    book: bookReducer,
  },
});

export default store;
