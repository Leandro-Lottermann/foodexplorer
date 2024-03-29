import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        font-size: 16px;

        
    }

    body {
        font-family: "Roboto";
        -webkit-font-smoothing: antialised;
        background: ${({theme}) => theme.COLORS.DARK_400};
    }

    body, input, button, textarea {
        font-size: 1rem;
        outline: none;
    }

    a {
        text-decoration: none;
    }

    button, a {
        cursor: pointer;
        transition: filter 0.2s;
    }

    button:hover, a:hover {
        filter: brightness(0.9);
    }



`;
