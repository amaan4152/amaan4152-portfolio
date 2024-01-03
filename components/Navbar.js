import { Box, Button, Input, Flex, Stack, IconButton, Text } from '@chakra-ui/react'
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
import { motion } from 'framer-motion'

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
            zIndex={2}
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
                    zIndex={2}
                >
                    <Navitem>cd /home</Navitem>
                    <Navitem>cd /posts</Navitem>
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
                as={motion.div}
                ref={btnRef}
                colorScheme='gray'
                icon={<SiGnubash/>}
                variant="solid"
                onClick={onOpen}
                whileHover={{ scale: 1.20 }}
            ></IconButton>
            <Drawer
                isOpen={isOpen}
                placement='left'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent
                  bg='orange.100'
                >
                  <DrawerCloseButton />
                  <DrawerHeader
                    fontFamily="gohu"
                  >
                    Contents 
                  </DrawerHeader>
                  <DrawerBody>
                    <Text fontfamily="gohu">
                      .<br/>
                      ├── page0.html<br/>
                      ├── page1.html<br/>
                      └── page2.html<br/>
                    </Text>
                  </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default Navbar
