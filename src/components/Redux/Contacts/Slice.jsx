import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  postNewContact,
  deleteOneContact,
} from '../operation/operation';


const contacts = {
  items: [],
  isLoading: false,
  error: null,
};

export const contactSlice = createSlice({
  name: 'contacts',
  initialState: contacts,
  
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
      })
      .addCase(postNewContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items.push(action.payload);
      })
      .addCase(deleteOneContact.fulfilled, (state, action) => {
        state.isLoading = false;
        const index = state.items.findIndex(
          contact => contact.id === action.payload
        );
        state.items.splice(index, 1);
      });
  },
});

export const { addContact, deleteContact } = contactSlice.actions;


// reducers: {
//   addContact(state, action) {
//     if (
//       state.items.find(
//         contact =>
//           contact.name.toLowerCase() === action.payload.name.toLowerCase() ||
//           contact.phone === action.payload.phone
//       )
//     ) {
//       toast.error(
//         `${action.payload.name} or ${action.payload.phone} is already in contacts`
//       );
//     } else {
//       state.items.push(action.payload);
//       postNewContact(action.payload);
//     }
//   },
//   deleteContact(state, action) {
//     const index = state.items.findIndex(
//       contact => contact.id === action.payload
//     );
//     state.items.splice(index, 1);
//     deleteOneContact(action.payload);
//   },
// },