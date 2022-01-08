import { Box, Flex, Stack } from '@chakra-ui/react'
import ButtonThemeToggle from './ToggleTheme';
import Navitem from './NavItem';

// Navigation bar component
const Navbar = () => {
    return (
        // box-container for navigation bar layout
        <Box
            position="fixed"
            backdropFilter="auto"
            backdropBlur="sm"
            align="center"
            as="nav"
            w="100%"
        >
            {/* flex layout contents in navigation bar container */}
            <Flex
                borderRadius="10px"
                p={3}
                paddingRight={100}
                paddingLeft={100}
                wrap="wrap"
                justify='space-between'
                align="center"
            >
                {/* stack navigation bar items */}
                <Stack 
                    direction='row'
                    alignItems='center' 
                    display='flex'
                    width={{ base: 'full', md: 'auto' }}
                    spacing={5}
                    flexGrow={1}
                >
                    <Navitem>whoami</Navitem>
                    <Navitem>ll projects/</Navitem>
                    <Navitem>cd posts/</Navitem>
                </Stack>

                {/* Include dark mode toggle button and social media badges */}
                <Box
                align="right"
                flex={1}
                >
                    <ButtonThemeToggle />
                </Box>
            </Flex>
        </Box>
    )
}

export default Navbar