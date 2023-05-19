import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const contacts = [];

export const contactSlice = createSlice({
  name: 'contacts',
  initialState: { data: contacts },
  reducers: {
    addContact(state, action) {
      if (
        state.data.find(
          contact =>
            contact.name.toLowerCase() === action.payload.name.toLowerCase() ||
            contact.number === action.payload.number
        )
      ) {
        toast.error(
          `${action.payload.name} or ${action.payload.number} is already in contacts`
        );
      } else {
        state.data.push(action.payload);
      }
    },
    deleteContact(state, action) {
      const index = state.data.findIndex(
        contact => contact.id === action.payload
      );
      state.data.splice(index, 1);
    },
  },
});

export const { addContact, deleteContact } = contactSlice.actions;
