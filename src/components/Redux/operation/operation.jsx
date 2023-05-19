import { createAsyncThunk } from "@reduxjs/toolkit"
import { getContacts } from "services/fetchContacts"


export const fetchContacts = createAsyncThunk(
    'contacts/fetchContacts',
    async () => {
      const contacts = await getContacts()
      return contacts
    }
  )

