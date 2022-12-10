import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = {
  inputValue: '',
};

const contactsFilterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    addFilter: {
      reducer(state, action) {
        state.inputValue = action.payload.text;
      },
      prepare(text) {
        return {
          payload: {
            text,
          },
        };
      },
    },
  },
});

export const { addFilter } = contactsFilterSlice.actions;

export const contactsFilterReducer = contactsFilterSlice.reducer;
