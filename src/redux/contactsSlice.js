import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './operations';
import {
  handleAddContactsFulfilled,
  handleDeleteContactFulfilled,
  handleFetchContactsFulfilled,
  handleFulfilled,
  handlePending,
  handleRejected,
} from './helpers';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,

  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, handleFetchContactsFulfilled)
      .addCase(addContact.fulfilled, handleAddContactsFulfilled)
      .addCase(deleteContact.fulfilled, handleDeleteContactFulfilled)

      .addMatcher(action => action.type.endsWith('pending'), handlePending)
      .addMatcher(action => action.type.endsWith('fulfilled'), handleFulfilled)
      .addMatcher(action => action.type.endsWith('rejected'), handleRejected);
  },
});

export const contactsReducer = contactsSlice.reducer;
