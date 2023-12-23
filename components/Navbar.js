import { Box, Button, Input, Flex, Stack, IconButton } from '@chakra-ui/react'
import Navitem from './NavItem';

import { useRef } from 'react'
import { useDisclosure } from '@chakra-ui/react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
} from '@chakra-ui/react'
import { VscTerminalBash } from "react-icons/vsc"
import { SiGnubash } from "react-icons/si"
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

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
                    <DrawerExample></DrawerExample>
                    <Navitem>whoami</Navitem>
                    <Navitem>ll projects/</Navitem>
                    <Navitem>cd posts/</Navitem>
                </Stack>
            </Flex>
        </Box>
    )
}

function DrawerExample() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()

    return (
        <>
            <IconButton
                ref={btnRef}
                colorScheme='teal'
                icon={<SiGnubash/>}
                variant="solid"
                onClick={onOpen}
            ></IconButton>
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Create your account</DrawerHeader>

                    <DrawerBody>
                        <Input placeholder='Type here...' />
                    </DrawerBody>

                    <DrawerFooter>
                        <Button variant='outline' mr={3} onClick={onClose}>
                            Cancel
                        </Button>
                        <Button colorScheme='blue'>Save</Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default Navbar