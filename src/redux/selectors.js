import { createSelector } from '@reduxjs/toolkit';

export const getContacts = state => state.contacts.items;
export const getError = state => state.contacts.error;
export const getIsLoading = state => state.contacts.isLoading;

export const getFilter = state => state.filter.filter;

export const getFilteredContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) =>
    contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    )
);
