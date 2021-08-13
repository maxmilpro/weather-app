import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif !important;
  }
`;

const Title = styled.div`
  text-align: center;
  font-weight: 400;
  font-size: 50px;
`;

const Location = styled.div`
  text-align: center;
  font-weight: 400;
  font-size: 25px;
  margin-bottom: 5px;
`;

export { GlobalStyle, Title, Location };
