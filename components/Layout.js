import Head from 'next/head'
import Navbar from "./Navbar"
import { useRouter } from 'next/router'
import {
    Box,
    Center,
    Container,
    Divider,
    VStack,
    Image,
    HStack,
    Heading,
    Icon,
    Link,
    TableContainer,
    Table,
    Thead,
    Tbody,
    Tr,
    Td,
    Th,
    Text,
    Flex
} from '@chakra-ui/react'
import { GoMarkGithub, GoMail } from 'react-icons/go'
import { FaLinkedin } from 'react-icons/fa'

// Layout framwork for pages in portfolio
// ref: https://www.freecodecamp.org/news/how-to-build-a-portfolio-site-with-nextjs-tailwindcss/
export default function Layout({ children, ...extraMeta }) {
    const r = useRouter()

    const meta = {
        title: "Amaan Rahman Portfolio",
        name: "Amaan Rahman",
        github: "https://github.com/amaan4152",
        description: "Undergraduate Electrical Engineer and Computer Vision researcher @ The Cooper Union. Welcome to my humble abode.",
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
                    <VStack>
                        <Container
                            maxW="container.md"
                            width="23%"
                            height="23%"
                            display="inline-block"
                            borderStyle="solid"
                            borderRadius="full"
                            mt={50}
                        >
                            <Image
                                src="profilePic.jpeg"
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
                            <Text>
                                The Cooper Union
                                M.Engg. & B.E. in EE '23
                            </Text>

                        </Container>
                        <HStack>
                            <Container pr={3}>
                                <Link
                                    href="https://github.com/amaan4152"
                                    borderRadius="full"
                                >
                                    <Icon as={GoMarkGithub} boxSize={6} />
                                </Link>
                            </Container>
                            <Container>
                                <Link
                                    href="mailto: amaan.rahman@cooper.edu"
                                    borderRadius="full"
                                    border="hidden"
                                >
                                    <Icon as={GoMail} boxSize={8} />
                                </Link>
                            </Container>
                            <Container>
                                <Link
                                    href="https://www.linkedin.com/in/amaan-rahman-340a3a181"
                                    borderRadius="full"
                                >
                                    <Icon as={FaLinkedin} boxSize={7} />
                                </Link>
                            </Container>
                        </HStack>
                        <Divider pt={5} borderColor="black" />
                        <Container
                            maxW="container.lg"
                            pt={5}
                        >
                            {children}
                        </Container>
                        <Divider pt={5} borderColor="black" />
                        <Heading
                            fontSize="30px"
                            fontFamily="consolas"
                        >
                            ls skills/
                        </Heading>
                        <Container pb={5}>
                            <TableContainer>
                                <Table variant='simple'>
                                    <Thead>
                                        <Tr>
                                            <Th>
                                                <HStack>
                                                    <Text>Software</Text>
                                                    <Image w="10%" src="programming.png" alt="software icon" />
                                                </HStack>
                                            </Th>
                                            <Th>
                                                <HStack>
                                                    <Text>Hardware</Text>
                                                    <Image w="10%" src="hw_icon.png" alt="hardware icon " />
                                                </HStack>
                                            </Th>
                                        </Tr>
                                    </Thead>
                                    <Tbody>
                                        <Tr>
                                            <Td>Python</Td>
                                            <Td>Cadence Virtuoso</Td>
                                        </Tr>
                                        <Tr>
                                            <Td>MATLAB</Td>
                                            <Td>Synopsis Design Compiler</Td>
                                        </Tr>
                                        <Tr>
                                            <Td>Verilog/SystemVerilog HDL</Td>
                                            <Td>Synopsys IC Compiler II</Td>
                                        </Tr>
                                        <Tr>
                                            <Td>C++</Td>
                                            <Td>Vivado Design Suite</Td>
                                        </Tr>
                                        <Tr>
                                            <Td>C</Td>
                                            <Td>LTSpice</Td>
                                        </Tr>
                                        <Tr>
                                            <Td>x86 Assembly</Td>
                                            <Td>Zynq 7000 ZedBoard</Td>
                                        </Tr>
                                        <Tr>
                                            <Td>Bash & Tcl</Td>
                                            <Td>UNIX/Linux Systems</Td>
                                        </Tr>
                                    </Tbody>
                                </Table>
                            </TableContainer>
                        </Container>
                        <Divider pb={3} />
                        <Box align="center" opacity={0.4} fontSize="sm" pb={3}>
                            &copy; {new Date().getFullYear()} Amaan Rahman. All Rights Reserved.
                        </Box>
                    </VStack>
                </Center>
            </main>
        </div >
    )
}