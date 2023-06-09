import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    body {
        background-color: ${({ theme }) => theme.body};
        color: ${({ theme }) => theme.text};
        font-family: 'Poppins', sans-serif;
        font-size: 1.15em;
        margin: 0;
        padding: 0;
    }
    p {
        line-height: 1.5;
    }
    img {
        max-width: 100%;
    }
`;

export default GlobalStyles;
