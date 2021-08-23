import {createGlobalStyle} from 'styled-components'
import GothamBold from './utils/fonts/Gotham-Font/GothamBold.woff'
import GothamLight from './utils/fonts/Gotham-Font/GothamLight.woff'
import GothamMedium from './utils/fonts/Gotham-Font/GothamMedium.woff'
import GothamBookItalic from './utils/fonts/Gotham-Font/GothamBookItalic.woff'
const GlobalStyles = createGlobalStyle `
html, body{
    margin: 0;
    font-family: 'Helvetica';
}
// COLORES
.degradeAzul{
    background: rgb(21,27,102);
    background: linear-gradient(180deg, rgba(21,27,102,1) 15%, rgba(0,224,209,1) 54%);
}
.amarillo{
    background-color: #FFCF11;
}
.azulRey{
    background-color: #293999;
    color: #FBFBFB;
}
.naranja{
    background-color: #FF671B;
}
.celeste{
    background-color: #00B2A6;
}
// FUENTES
@font-face {
    font-family: "GothamBold";
    src: local("GothamBold"), url(${GothamBold}) format("woff");
    font-weight: normal;
}
@font-face {
    font-family: "GothamLight";
    src: local("GothamLight"), url(${GothamLight}) format("woff");
    font-weight: normal;
}
@font-face {
    font-family: "GothamMedium";
    src: local("GothamMedium"), url(${GothamMedium}) format("woff");
    font-weight: normal;
}
@font-face {
    font-family: "GothamBookItalic";
    src: local("GothamBookItalic"), url(${GothamBookItalic}) format("woff");
    font-weight: normal;
}
`
export default GlobalStyles;