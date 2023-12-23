/* eslint-disable no-console */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  greetings: [],
  loading: false,
};

const greetingsSlice = createSlice({
  name: 'greetings',
  initialState,
  reducers: {
    setGreetings: (state, action) => {
      state.greetings = action.payload;
    },
  },
});

export const { setGreetings } = greetingsSlice.actions;

export default greetingsSlice.reducer;

const fetchGreetings = () => async (dispatch) => {
  try {
    const res = await fetch('http://127.0.0.1:3001/api/greetings/random');
    const data = await res.json();
    dispatch(setGreetings(data));
  } catch (error) {
    console.error(error);
  }
};

export { fetchGreetings };