import { createGlobalStyle } from 'styled-components'
export const ResetStyle = createGlobalStyle`

* {
  box-sizing: border-box;
}

::-webkit-scrollbar {
    display: none;
}


html,body{
  height: 100%;
  /* overflow-x: hidden; */
}

html{
  font-size: 62.5%;
  overflow-x: hidden;
}

body,
div,
dl,
dt,
dd,
ul,
ol,
li,
h1,
h2,
h3,
h4,
h5,
h6,
pre,
form,
fieldset,
input,
textarea,
p,
blockquote,
th,
td {
  padding: 0;
  margin: 0;
  font-size: 100%;
}

fieldset,
img {
  border: 0;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

ol,
ul {
  list-style: none;
}

address,
caption,
cite,
code,
dfn,
em,
strong,
th,
var {
  font-weight: normal;
  font-style: normal;
}

caption,
th {
  text-align: left;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: normal;
  font-size: 100%;
}
h1{
  font-size: 40px;
}

q:before,
q:after {
  content: '';
}

abbr,
acronym {
  border: 0;
}

a{
  text-decoration: none;
  color: inherit;
}
`
