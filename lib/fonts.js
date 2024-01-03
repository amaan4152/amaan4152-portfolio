import { Global } from '@emotion/react'

const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: 'GohuFont14';
        src: url('./fonts/GohuFont14NerdFont-Regular.ttf');
      }
      @font-face {
        font-family: 'ProFontPowerline';
        src: url('./fonts/ProFont-For-Powerline.ttf');
      }
      `}
  />
)

export default Fonts
