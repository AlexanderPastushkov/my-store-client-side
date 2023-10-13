import { createGlobalStyle } from "styled-components";
export const Global = createGlobalStyle`
  *{
    padding: 0px;
    margin: 0px;
    border: 0px;
  },
  *,
  *:before,
  *:after {
  box-sizing: border-box;
},
html,
body {
  height: 100%;
  background-color: #dfdfdf;
},
a {
  color: inherit;
},
a:link,
a:visited {
  text-decoration: none;
},
a:hover {
  text-decoration: none;
},
ul li {
  list-style: none;
},
img {
  vertical-align: top;
},
h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: inherit;
  font-size: inherit;
},

`;