import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
	line-height: 1;
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text}
}

ol, ul, menu {
  list-style: none;
}

img,svg {
  display: block;
  max-width: 100%;
}

table {
  border-collapse: collapse;
}

textarea {
  white-space: revert;
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

a {
  color: inherit;
  text-decoration: inherit; /* no underline */
}
`
