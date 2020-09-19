import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
#root {
    min-height: 100vh;
    display: grid;
    grid-template-rows: auto 1fr auto;
}

#contain {
    padding: 1% 8%;
}

body {
    background:#eeeeee;
    margin: 0;
    padding: 0;
    font-family: 'Open Sans', sans-serif;
}
figure {
    margin: 0;
}
h1,
h2,
h3,
h4,
h5 {
    font-family: 'Lato', sans-serif;
}
`