import reset from 'styled-reset';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    ${reset}
    * {
    	margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        height: 100vh;
        margin: 0;
        padding: 0;
        font-family: 'Noto Sans KR', sans-serif;
    }
    button { 
        cursor: pointer;
        border: none;
        outline: none;
        font-family: inherit;
        background: inherit;
        color: inherit;
    }
    a{
        text-decoration: none;
        color: inherit;
    }
    input,
    textarea{
        outline: none;
        border: none;
    }
    textarea{
        font: inherit;
        resize: none;
    }
`;

export default GlobalStyle;
