
import Head from 'next/head'
import Navbar from "./Navbar"
import { useRouter } from 'next/router'


import {
    Box,
    Button,
    Input,
    Center,
    Container,
    Divider,
    VStack,
    Image,
    HStack,
    Heading,
    Icon,
    Link,
    List,
    ListItem,
    ListIcon,
    TableContainer,
    Table,
    Thead,
    Tbody,
    Tr,
    Td,
    Th,
    Text,
    Flex,
    UnorderedList
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { GoMail } from 'react-icons/go'
import { FaLinkedin } from 'react-icons/fa'
import { TbLogicNot } from 'react-icons/tb'
import { MdOutlineDesignServices, } from 'react-icons/md'
import { SiCompilerexplorer, SiGithub } from 'react-icons/si'



// Layout framwork for pages in portfolio
// ref: https://www.freecodecamp.org/news/how-to-build-a-portfolio-site-with-nextjs-tailwindcss/
export default function Layout({ children, ...extraMeta }) {
    const r = useRouter()

    const meta = {
        title: "Amaan Rahman Portfolio",
        name: "Amaan Rahman",
        github: "https://github.com/amaan4152",
        description: "Welcome to my humble abode.",
        ...extraMeta
    }

    return (
        <div>
            <Head>
                <title>{meta.title}</title>
                <link rel="shortcut icon" href="githubLogo.png" />
                <meta name="og:title" content={meta.title} />
                <meta name="og:name" content={meta.name} />
                <meta name="og:github" content={meta.github} />
                <meta name="description" content={meta.description} />
                {meta.data && (
                    <meta property="page:publication_date" content={meta.date} />
                )}
            </Head>
            <main>
                <Center>
                    <VStack width="90%">
                        <Container
                            width="15%"
                            height="25%"
                            display="inline-block"
                            borderStyle="solid"
                            borderRadius="full"
                            pt="100px"
                        >
                            <Image
                                src="webpage_pfp.jpg"
                                borderRadius='full'
                                width="100%"
                                height="100%"
                                alt="self-portrait pic"
                            />
                        </Container>
                        <Container
                            fontFamily="consolas"
                            fontSize="32px"
                            textAlign="center"
                            pt={5}
                        >
                            Amaan Rahman
                        </Container>
                        <Container
                            fontFamily="consolas"
                            fontSize="16px"
                            textAlign="center"
                        >
                            {'Ph.D at Georgia Intitute of Technology - '}
                            <Link color="red.300" href="https://gtcad.gatech.edu/" target="_blank" rel="noopener noreferrer">
                                {'GTCAD Lab'}
                            </Link>

                        </Container>
                        <HStack>
                            <Container
                                as={motion.div}
                                pr={3}
                                whileHover={{ scale: 1.15 }}
                            >
                                <Link
                                    href="https://github.com/amaan4152"
                                    borderRadius="full"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Icon as={SiGithub} boxSize={6} />
                                </Link>
                            </Container>
                            <Container
                                as={motion.div}
                                whileHover={{ scale: 1.15 }}
                            >
                                <Link
                                    href="mailto: amaan.rahman@gatech.edu"
                                    borderRadius="full"
                                    border="hidden"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Icon as={GoMail} boxSize={8} />
                                </Link>
                            </Container>
                            <Container
                                as={motion.div}
                                whileHover={{ scale: 1.15 }}
                            >
                                <Link
                                    href="https://www.linkedin.com/in/amaan-rahman-340a3a181"
                                    borderRadius="full"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Icon as={FaLinkedin} boxSize={7} />
                                </Link>
                            </Container>
                        </HStack>
                        <Container
                            maxW="container.xl"
                            width="100%"
                            pt={5}
                        >
                            {children}
                        </Container>
                        <Heading
                            fontSize="30px"
                            fontFamily="consolas"
                        >
                            ls skills/
                        </Heading>
                        <Container pb={5} maxW="container.xl" width="100%" fontFamily="consolas">
                            <TableContainer>
                                <Table variant='simple'>
                                    <Thead>
                                        <Tr>
                                            <Th>
                                                <HStack>
                                                    <Text>Software Languages/Tools</Text>
                                                    <Image w="5%" src="programming.png" alt="software icon" />
                                                </HStack>
                                            </Th>
                                            <Th>
                                                <HStack>
                                                    <Text>Libraries</Text>
                                                    <Image w="6%" src="books.png" alt="library icon " />
                                                </HStack>
                                            </Th>
                                            <Th>
                                                <HStack>
                                                    <Text>Hardware Languages/Tools</Text>
                                                    <Image w="5%" src="hw_icon.png" alt="hardware icon " />
                                                </HStack>
                                            </Th>

                                        </Tr>
                                    </Thead>
                                    <Tbody>
                                        <Tr>
                                            <Td>Python</Td>
                                            <Td>PyTorch</Td>
                                            <Td>Cadence Virtuoso</Td>
                                        </Tr>
                                        <Tr>
                                            <Td>C++</Td>
                                            <Td>Tensorflow</Td>
                                            <Td>
                                                <Text as='u'>Synopsis EDA Tools:</Text>
                                                <br />
                                                <br />
                                                <List spacing={5}>
                                                    <ListItem>
                                                        <ListIcon as={MdOutlineDesignServices} color='red.300' />
                                                        Design Compiler
                                                    </ListItem>
                                                    <ListItem>
                                                        <ListIcon as={TbLogicNot} color='red.300' />
                                                        IC Compiler II
                                                    </ListItem>
                                                    <ListItem>
                                                        <ListIcon as={SiCompilerexplorer} color='red.300' />
                                                        Library Manager/Compiler
                                                    </ListItem>
                                                </List>
                                            </Td>
                                        </Tr>
                                        <Tr>
                                            <Td>C</Td>
                                            <Td>OpenCV</Td>
                                            <Td>ANSYS RedHawk</Td>
                                        </Tr>
                                        <Tr>
                                            <Td>Perl</Td>
                                            <Td>Pandas</Td>
                                            <Td>Verilog/SystemVerilog HDL</Td>
                                        </Tr>
                                        <Tr>
                                            <Td>Bash</Td>
                                            <Td>Numpy</Td>
                                            <Td>Vivado Design Suite</Td>
                                        </Tr>
                                        <Tr>
                                            <Td>Tcl</Td>
                                            <Td>MATLAB Communication Toolbox</Td>
                                            <Td>LTSpice</Td>
                                        </Tr>
                                        <Tr>
                                            <Td>MATLAB</Td>
                                            <Td>MATLAB Instrumentation Toolbox</Td>
                                            <Td>Zynq 7000 ZedBoard</Td>
                                        </Tr>
                                        <Tr>
                                            <Td>JavaScript</Td>
                                            <Td>-</Td>
                                            <Td>Unix/Linux Systems</Td>
                                        </Tr>
                                        <Tr>
                                            <Td>x86 Assembly</Td>
                                            <Td>-</Td>
                                            <Td>-</Td>
                                        </Tr>
                                    </Tbody>
                                </Table>
                            </TableContainer>
                        </Container>
                        <Box align="center" opacity={0.4} fontSize="sm" pb={3}>
                            &copy; {new Date().getFullYear()} Amaan Rahman. All Rights Reserved.
                        </Box>
                    </VStack>
                </Center>

            </main>
        </div >
    )
}
