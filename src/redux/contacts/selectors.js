import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;

export const selectinputValueFilter = state => state.filter;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectEditing = state => state.contacts.isEditing;

export const selectCurrentContact = state => state.contacts.currentContact;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectinputValueFilter],
  (contacts, filter) => {
    if (filter.inputValue === '') {
      return contacts;
    }
    if (filter.inputValue !== '') {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.inputValue.toLowerCase())
      );
    }
  }
);
