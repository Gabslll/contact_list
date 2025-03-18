"use client";

import { useSelector, useDispatch } from "react-redux";
import { removeContact, setEditingContact } from "../store/contactSlice.ts";
import { RootState } from "../store";
import { Contact } from "../types.tsx";
import {
  List,
  ListItem,
  ContactInfo,
  ContactName,
  ContactDetail,
  ButtonGroup,
  ActionButton,
  EmptyMessage,
} from "./styles.ts";
import React from "react";

const ContactList: React.FC = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state: RootState) => state.contacts.contacts);

  const handleEdit = (contact: Contact) => {
    dispatch(setEditingContact(contact));
  };

  const handleDelete = (id: string) => {
    if (window.confirm("Tem certeza que deseja excluir este contato?")) {
      dispatch(removeContact(id));
    }
  };

  if (contacts.length === 0) {
    return <EmptyMessage>Nenhum contato adicionado ainda.</EmptyMessage>;
  }

  return (
    <List>
      {contacts.map((contact) => (
        <ListItem key={contact.id}>
          <ContactInfo>
            <ContactName>{contact.fullName}</ContactName>
            <ContactDetail>
              <strong>E-mail:</strong> {contact.email}
            </ContactDetail>
            <ContactDetail>
              <strong>Telefone:</strong> {contact.phone}
            </ContactDetail>
          </ContactInfo>
          <ButtonGroup>
            <ActionButton edit onClick={() => handleEdit(contact)}>
              Editar
            </ActionButton>
            <ActionButton delete onClick={() => handleDelete(contact.id)}>
              Excluir
            </ActionButton>
          </ButtonGroup>
        </ListItem>
      ))}
    </List>
  );
};

export default ContactList;
