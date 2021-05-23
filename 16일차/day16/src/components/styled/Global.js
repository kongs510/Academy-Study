import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyle = createGlobalStyle`
${reset}
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400&display=swap');

html{
    font-size:10px
}
body{
    font-family: 'Noto Sans KR', sans-serif;
    font-size:16px;
    line-height:1.6
}
a{ text-decoration:none; color:#333}
`

export default GlobalStyle