import { createSlice } from '@reduxjs/toolkit';

// Create the interface/structure for the items counter

export interface CounterState {
  value: number
  cart: number
}

export const initialState: CounterState = {
  value: 0,
  cart: 0
}

export const itemsSlice = createSlice({
  name: 'shopping',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    }
  }
})

export default itemsSlice.reducer;
export const { increment, decrement } = itemsSlice.actions;