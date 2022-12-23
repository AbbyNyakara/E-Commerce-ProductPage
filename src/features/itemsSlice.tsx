import { createSlice } from '@reduxjs/toolkit';

// Create the interface/structure for the items counter

export interface CounterState {
  value: number
  cart: number
  displayCart: boolean
}

export const initialState: CounterState = {
  value: 0,
  cart: 0,
  displayCart: false
}

export const itemsSlice = createSlice({
  name: 'shopping',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
      state.cart += 1;
    },
    // The decrement should not go below zero
    decrement: (state) => {
      if(state.value === 0) {
        state.value = 0;
        state.cart = 0;
      } else {
        state.value -= 1;
        state.cart -= 1;
      }
    },
    toggleCart: (state) => {
      state.displayCart = !state.displayCart
    }
  }
})

export default itemsSlice.reducer;
export const { increment, decrement } = itemsSlice.actions;
