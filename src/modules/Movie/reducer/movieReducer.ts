import { createReducer } from "@reduxjs/toolkit";
import { movieActions } from "../constants";
import { MovieResponse } from "../interfaces";

const initialState = {
  status: "idle",
  data: {} as MovieResponse,
};

const movieReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(movieActions.start, (state) => {
      state.status = "pending";
    })
    .addCase(movieActions.success, (state, action) => {
      state.data = action.payload.data;
      state.status = "idle";
    })
    .addCase(movieActions.error, (state, action) => {
      state.status = "error";
    });
});

export default movieReducer;
