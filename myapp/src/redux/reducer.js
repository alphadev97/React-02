import { createReducer } from "@reduxjs/toolkit";

export const firstReducer = createReducer(
  {
    count: 0,
  },
  {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
  }
);
