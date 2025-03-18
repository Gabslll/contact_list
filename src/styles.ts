import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }

    body {
        background-color: #f5f5f5;
    }
`;

export const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 800px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 2rem;
`;

export const Title = styled.h1`
  color: #333;
  margin-bottom: 2rem;
  text-align: center;
`;
