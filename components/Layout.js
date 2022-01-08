import Head from 'next/head'
import Navbar from "./Navbar"
import { useRouter } from 'next/router'
import { Container } from '@chakra-ui/react'

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
                <Navbar />
                <Container maxW="container.md" pt={40}>
                    {children}
                </Container>
            </main>
        </div>
    )
}