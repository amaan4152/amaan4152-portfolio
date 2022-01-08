import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

const ButtonThemeToggle = () => {
    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <IconButton
            aria-label="Switch theme"
            borderRadius='20px'
            colorScheme={useColorModeValue('purple', 'orange')}
            icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
            onClick={toggleColorMode}
            _hover={{
                color: useColorModeValue('purple.100', 'red.400')
            }}
            variant="solid"
        ></IconButton>
    )
}

export default ButtonThemeToggle
