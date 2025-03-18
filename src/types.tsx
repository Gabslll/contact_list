export interface Contact {
  id: string;
  fullName: string;
  email: string;
  phone: string;
}

export interface ContactsState {
  contacts: Contact[];
  editingContact: Contact | null;
}
