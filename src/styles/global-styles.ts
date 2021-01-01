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
        cursor: pointer;
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
    h1{
        font-size: 2rem;
        padding: 2rem;
    }
    h2{
        font-size: 1.5rem;
        padding: 1rem;
    }
    h3{
        font-size: 1.17rem;
        padding: 1.17rem;
    }
    h4{
        font-size: 1rem;
        padding: 1rem;
    }
    h5{
        font-size: 0.83rem;
    }
    h6{
        font-size: 0.75rem;
    }
    h1, h2, h3, h4, h5, h6{
        font-weight: bolder;
    }
`;

export default GlobalStyle;
