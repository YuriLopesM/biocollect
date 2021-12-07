import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body {
        height: 100vh;
    }

    /* html {
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }
        @media (max-width: 720px) {
            font-size: 87.5%;
        }
    } */

    body {
        background: ${props => props.theme.colors.background};
        color: ${props => props.theme.colors.black}
    }

    body, 
    input, 
    textarea, 
    select, 
    button {
        font: 400 1rem Roboto, sans-serif;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-family: Inter, sans-serif
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    button {
        cursor: pointer;
    }

    ul {
        list-style-type: none;
    }

    
    ::-webkit-scrollbar {
        width: 0.5rem;
    }
    ::-webkit-scrollbar-track {
        background: ${props => props.theme.colors.light_gray};
    }
    
    ::-webkit-scrollbar-thumb {
        background: ${props => props.theme.colors.gray};
        border-radius: 0.5rem;
    }

`