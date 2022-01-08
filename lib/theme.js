// theme.js

// 1. import `extendTheme` function
import { extendTheme } from '@chakra-ui/react'

// 2. Add your color mode config
const themeColorConfig = {
	initialColorMode: 'dark',
	useSystemColorMode: false,
}

const blurConfig = {
	blue: {
		sm: "2px",
		md: "4px",
		lg: "8px"
	}
}

// 3. extend the theme
const theme = extendTheme({ themeColorConfig, blurConfig })

export default theme