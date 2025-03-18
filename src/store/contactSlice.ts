import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Contact, ContactsState } from "../types";
import { v4 as uuidv4 } from "uuid";

const initialState: ContactsState = {
  contacts: [],
  editingContact: null,
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact: (state, action: PayloadAction<Omit<Contact, "id">>) => {
      const newContact = {
        id: uuidv4(),
        ...action.payload,
      };
      state.contacts.push(newContact);
    },
    removeContact: (state, action: PayloadAction<string>) => {
      state.contacts = state.contacts.filter(
        (contact) => contact.id !== action.payload,
      );
    },
    setEditingContact: (state, action: PayloadAction<Contact | null>) => {
      state.editingContact = action.payload;
    },
    updateContact: (state, action: PayloadAction<Contact>) => {
      const index = state.contacts.findIndex(
        (contact) => contact.id === action.payload.id,
      );
      if (index !== -1) {
        state.contacts[index] = action.payload;
      }
      state.editingContact = null;
    },
  },
});

export const { addContact, removeContact, setEditingContact, updateContact } =
  contactsSlice.actions;
export default contactsSlice.reducer;
