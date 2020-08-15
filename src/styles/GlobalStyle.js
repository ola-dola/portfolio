import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`

    /* -- RESET!! -- */

    /* http://meyerweb.com/eric/tools/css/reset/ 
    v2.0 | 20110126
    License: none (public domain)
    */

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    *, *::before, *::after {
      box-sizing: border-box;
    }

    /* -- Custom -- */

    html {
        font-size: 16px;
    }

    body {
        margin: 0 auto;
        width: 96%;
        max-width: 820px;
        color: rgb(238, 238, 238);
        background-color: #eeeeee;
        font-family: 'Roboto Mono', monospace;
    }

    svg {
        fill: #0E1B42;
        color: #0E1B42;
        font-size: 2rem;
        text-decoration: underline;

        :hover, :focus {
            fill: #6f00ff;
        }
    }

    a {
        color: #0E1B42;
        text-decoration: none;

        :visited {
            color: #0E1B42;
        }
        :hover, :focus, :active {
            color: #6f00ff;
        }
    }

    h1,h2,h3,h4,h5,h6 {
        color: #1F1940;
        font-family: "IBM Plex Mono", monospace;
        font-weight: 500;
    }

    p, ul, li, a {
        color: #0E1B42;
        font-size: 1rem;
        font-weight: 400;

        @media(min-width: 750px) {
            font-size: 1.25rem;
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
