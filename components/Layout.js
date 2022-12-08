import Head from 'next/head'
import Navbar from "./Navbar"
import { useRouter } from 'next/router'
import {
    Center,
    Container,
    Divider,
    VStack,
    Image,
    HStack,
    Icon,
    Link
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
                            The Cooper Union M.Engg & EE '23
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
                        <Divider pt={5} />
                        <Container
                            pt={5}
                        >
                            {children}
                        </Container>
                    </VStack>
                </Center>
            </main>
        </div >
    )
}