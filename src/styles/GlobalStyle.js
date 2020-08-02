import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
      box-sizing: border-box;
    }
    body {
        margin: 0 2vw;
        border: .5px solid black;
        padding: .75rem .25rem;
        width: 96%;
        font-size: 1.5rem;
        color: black;
    }

    ul {
        list-style: none;
    }

    svg {
        fill: black;

        :hover {
            fill: #6f00ff;
        }
    }



    a {
        color: black;
        text-decoration: none;

        :visited {
            color: black;
        }
        :hover {
            color: #6f00ff;
        }
    }

    /* button {
        color: white;
        background-color: #6f00ff;
    } */

    /* @media screen and (max-width: 600px) {

    } */
`

export default GlobalStyle
