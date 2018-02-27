import { injectGlobal } from 'styled-components'

export default injectGlobal`
  *,
  *:before,
  *:after {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    box-sizing: border-box;
  }
`
