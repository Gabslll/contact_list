import { Provider } from "react-redux";
import { store } from "./store/index.ts";
import ContactList from "./components/ContactList.tsx";
import ContactForm from "./components/ContactForm.tsx";
import { GlobalStyle, Container, Title, AppWrapper } from "./styles.ts";
import React from "react";

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <AppWrapper>
        <Container>
          <Title>Lista de Contatos</Title>
          <ContactForm />
          <ContactList />
        </Container>
      </AppWrapper>
    </Provider>
  );
}

export default App;