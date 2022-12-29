import { createSlice } from '@reduxjs/toolkit';

// Create the interface/structure for the items counter
export interface CounterState {
  value: number
  cart: number
  displayCart: boolean
  addCart: number
  menu: boolean
}

export const initialState: CounterState = {
  value: 0,
  cart: 0,
  displayCart: false,
  addCart: 0,
  menu: false
}

export const itemsSlice = createSlice({
  name: 'shopping',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
      state.cart += 1;
    },
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
    },
    addCart: (state) => {
      state.addCart = state.value
    },
    emptyCart: (state) => {
      state.addCart = 0;
      state.value = 0;
    },
    toggleMenu: (state) => {
      state.menu = !state.menu
    }
  }
})

export default itemsSlice.reducer;
export const { increment, decrement, toggleCart, addCart, emptyCart, toggleMenu } = itemsSlice.actions;
