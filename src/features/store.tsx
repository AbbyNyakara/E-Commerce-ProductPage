import React from 'react';
import { configureStore } from '@reduxjs/toolkit';
import itemsReducer from './itemsSlice';

export const store = configureStore(
  {
    reducer : {
      shopping: itemsReducer
    }
  }
)



