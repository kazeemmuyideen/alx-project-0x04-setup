import { configureStore, createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

// Create a counter slice
const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      if (state.value > 0) {
        state.value -= 1;
      }
    },
  },
});

// Configure Redux store
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

// Export actions
export const { increment, decrement } = counterSlice.actions;

// Types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Typed dispatch hook
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
