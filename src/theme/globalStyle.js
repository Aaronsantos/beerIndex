import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body{
        @import url('https://fonts.googleapis.com/css?family=Raleway&display=swap');
        
        color: #ef692a;
        padding: 0; 
        margin: 0;
        font-size: 16px;
        font-family: Raleway, sans-serif;
    }
`;

export default GlobalStyle;
