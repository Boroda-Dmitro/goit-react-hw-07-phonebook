import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts } from '../operation/operation';
import { toast } from 'react-toastify';
import { addNewContact, deleteContactById } from 'services/fetchContacts';

const contacts = {
  items: [],
  isLoading: false,
  error: null,
};

export const contactSlice = createSlice({
  name: 'contacts',
  initialState: contacts,
  reducers: {
    addContact(state, action) {
      if (
        state.items.find(
          contact =>
            contact.name.toLowerCase() === action.payload.name.toLowerCase() ||
            contact.phone === action.payload.phone
        )
      ) {
        toast.error(
          `${action.payload.name} or ${action.payload.phone} is already in contacts`
        );
      } else {
        state.items.push(action.payload);
        addNewContact(action.payload);
      }
    },
    deleteContact(state, action) {
      const index = state.items.findIndex(
        contact => contact.id === action.payload
      );
      state.items.splice(index, 1);
      deleteContactById(action.payload);
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { addContact, deleteContact } = contactSlice.actions;
