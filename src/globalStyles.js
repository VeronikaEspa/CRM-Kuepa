import {createGlobalStyle} from 'styled-components'
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

`
export default GlobalStyles;