import Layout from "../components/Layout";
import { Box, Container, Heading, Link, Wrap } from "@chakra-ui/react"
export default function Home() {
  return (
    <Layout>
      <Heading
        fontSize="30px"
        fontFamily="consolas"
        pb={2}
      >
        whoami
      </Heading>
      Undergraduate senior Electrical Engineering student at The Cooper Union pursuing combined 4-year Master's of Engineering and Bachelor's of Engineering. Currently doing my M.Engg. thesis on designing a low-cost 3D human pose estimation algorithm motivated from Google's <Link color="teal.300" href="https://google.github.io/mediapipe/solutions/pose.html">Blazepose</Link>. Invested in researching ASIC architectures for accelerating deep neural networks (DNN), espceially in computer vision. Moreover, interested in designing low-power DNN algorithms while maintaining competitive accuracy against state-of-the-art.

      <Heading
        fontSize="30px"
        fontFamily="consolas"
        pt={5}
        pb={2}
      >
        ls projects/
      </Heading>
      <Wrap>
        <Box
          fontSize="50px"
          fontFamily="consolas"
          bg='tomato'
          w='100%'
        >
          50
        </Box>
      </Wrap>
    </Layout>
  )
}

