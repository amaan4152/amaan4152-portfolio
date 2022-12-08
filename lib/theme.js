// theme.js

// 1. import `extendTheme` function
import { defineStyleConfig, extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

// 2. Add your color mode config
const themeColorConfig = {
	initialColorMode: 'dark',
	useSystemColorMode: true,
}

const blurConfig = {
	blue: {
		sm: "2px",
		md: "4px",
		lg: "8px"
	}
}

const styles = {
	global: props => ({
		body: {
			bg: mode('#edddc7', '#202023')(props)
		}
	})
}

// 3. extend the theme
const theme = extendTheme({
	themeColorConfig,
	blurConfig,
	styles
})

export default theme