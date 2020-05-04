import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    html {
        box-sizing: border-box;
    }
    *, *:before, *:after {
        box-sizing: inherit;
    }
    body, html {
        ${props => props.theme.utils.typography('body')}

        color: ${props => props.theme.colors.black};
    }
    h1, h2, h3, h4, h5, h6, p, blockquote, figure, ol, ul, span {
        margin: 0;
        padding: 0;
    }
    h1, h2, h3, h4, h5, h6 {
        font-size: inherit;
    }
    table {
        border-spacing: 0;
        border-collapse: collapse;
    }
    th, td {
        text-align: left;
        vertical-align: top;
    }
    main,li {
        display: block;
    }
    dl {
      margin-top: 0;
      margin-bottom: 0;
    }
    dd {
      margin-left: 0;
    }
    sup {
      top: -.5em;
      position: relative;
      font-size: 75%;
      line-height: 0;
      vertical-align: baseline;
    }
    b, strong {
      font-weight: ${props => props.theme.fonts.defaults.fontWeightSemiBold};
    }
    figure {
      margin: 0;
    }
    a {
        color: inherit;
        text-decoration: none;
    }
    button {
        font: inherit;
        cursor: pointer;
        border: 0;
        margin: 0;
        padding: 0;
        overflow: visible;
        background: none;
        text-align: inherit;
        text-transform: inherit;
        letter-spacing: inherit;
        -webkit-font-smoothing: inherit;
    }
    ::-moz-focus-inner {
        border: 0;
        padding: 0;
    }
    :focus {
        outline: 0;
    }
    img {
        height: auto;
        border: 0;
        max-width: 100%;
        vertical-align: middle;
    }
    iframe {
        border: 0;
    }
    ::-webkit-scrollbar {
        width: 0; 
        background: transparent; 
        display: none; 
    }
`;
