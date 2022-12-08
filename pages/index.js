import Layout from "../components/Layout";
import {
  Box,
  Card,
  CardBody,
  Container,
  Heading,
  Image,
  Link,
  HStack,
  Stack,
  VStack,
  Wrap,
  CardHeader,
  UnorderedList,
  ListItem,
  Text,
  LinkBox,
  LinkOverlay,
  Center
} from "@chakra-ui/react"
export default function Home() {
  return (
    <Layout>
      <Center>
        <VStack>
          <Heading
            fontSize="30px"
            fontFamily="consolas"
            pb={2}
          >
            whoami
          </Heading>
          <Text>
            Undergraduate senior Electrical Engineering student at The Cooper Union pursuing combined 4-year Master\'s of Engineering and Bachelor\'s of Engineering. Currently doing my M.Engg. thesis on designing a low-cost 3D human pose estimation algorithm motivated from Google's <Link color="teal.300" href="https://google.github.io/mediapipe/solutions/pose.html">Blazepose</Link>. Invested in researching ASIC architectures for accelerating deep neural networks (DNN), espceially in computer vision. Moreover, interested in designing low-power DNN algorithms while maintaining competitive accuracy against state-of-the-art.
          </Text>


          <Heading
            fontSize="30px"
            fontFamily="consolas"
            pt={5}
            pb={2}
          >
            ll projects/
          </Heading>

          <HStack>
            <VStack>
              <LinkBox as='article' maxW='sm' p='5'>
                <Card
                  w="100%"
                  h="100%"
                  shadow="xl"
                  overflow='hidden'
                >
                  <Image
                    src="nist_research.jpg"
                    pt="5"
                    alt="NIST Research"
                  />
                  <Stack>
                    <CardBody bg="gray.300" fontFamily="consolas">
                      <Heading size='md' fontFamily="consolas">
                        <LinkOverlay href="https://github.com/amaan4152/3DPoseEvaluator" target="_blank" rel="noopener noreferrer">
                          3D Pose Evaluator Tool
                        </LinkOverlay>
                      </Heading>
                      <Text fontSize="16px">
                        3D human pose estimation evaluator tool composed of 3 algorithms: GAST-Net, VIBE, and Blazepose. Algorithms are evaluated on Optical Tracking System (OTS) data and metrics utilized are MPJPE and PJD. The tool is pipelined to later be utilized for exoskeleton kinematic evaluations.
                      </Text>
                    </CardBody>
                  </Stack>
                </Card>
              </LinkBox>
              <LinkBox as='article' maxW='sm' p='5'>
                <Card
                  w="100%"
                  h="100%"
                  shadow="xl"
                  overflow='hidden'
                >
                  <Image
                    src="https://pimages.toolbox.com/wp-content/uploads/2022/05/18113202/The-Architecture-of-a-Neural-Network.png"
                    pt="5"
                    alt="DNN Demo Pic"
                  />
                  <Stack>
                    <CardBody bg="gray.300" fontFamily="consolas">
                      <Heading size='md' fontFamily="consolas">
                        <LinkOverlay href="https://github.com/amaan4152/ECE472-DeepLearning" target="_blank" rel="noopener noreferrer">
                          Deep Learning Projects
                        </LinkOverlay>
                      </Heading>
                      <Text fontSize="16px">
                        Developed multilayer perceptrons (MLP), Convolutional Neural Networks (CNN), residual networks, and transformers with Tensorflow.
                      </Text>
                    </CardBody>
                  </Stack>
                </Card>
              </LinkBox>
              <LinkBox as='article' maxW='sm' p='5'>
                <Card
                  w="100%"
                  h="100%"
                  shadow="xl"
                  overflow='hidden'
                >
                  <Image
                    src="EM_algo.png"
                    pt="5"
                    alt="Bayesian ML Demo Pic"
                  />
                  <Stack>
                    <CardBody bg="gray.300" fontFamily="consolas">
                      <Heading size='md' fontFamily="consolas">
                        <LinkOverlay href="https://github.com/amaan4152/ECE474-BayesianML" target="_blank" rel="noopener noreferrer">
                          Bayesian Machine Learning Projects
                        </LinkOverlay>
                      </Heading>
                      <Text fontSize="16px">
                        Various projects implemented Bayesion machine learning algorithms and techniques such as kernel methods, Expextation-Maximization, Monte Carlo Markov Chain.
                      </Text>
                    </CardBody>
                  </Stack>
                </Card>
              </LinkBox>
              <LinkBox as='article' maxW='sm' p='5'>
                <Card
                  w="100%"
                  h="100%"
                  shadow="xl"
                  overflow='hidden'
                >
                  <Image
                    src="https://www.freecodecamp.org/news/content/images/2020/09/image-21.png"
                    pt="5"
                    alt="DSA Demo Pic"
                  />
                  <Stack>
                    <CardBody bg="gray.300" fontFamily="consolas">
                      <Heading size='md' fontFamily="consolas">
                        <LinkOverlay href="https://github.com/amaan4152/ECE365-DSA_II" target="_blank" rel="noopener noreferrer">
                          Data Structures & Algorithms II Projects
                        </LinkOverlay>
                      </Heading>
                      <Text fontSize="16px">
                        Implemented various data structures in C++ such as hash tables, heaps, Djikstra\'s algorithm, and dynamic programming.
                      </Text>
                    </CardBody>
                  </Stack>
                </Card>
              </LinkBox>
            </VStack>

            <VStack>
              <LinkBox as='article' maxW='sm' p='5'>
                <Card
                  w="100%"
                  h="100%"
                  shadow="xl"
                  overflow='hidden'
                >
                  <Image
                    src="final_layout.png"
                    pt="5"
                    alt="Layout Pic"
                  />
                  <Stack>
                    <CardBody bg="gray.300" fontFamily="consolas">
                      <Heading size='md' fontFamily="consolas">
                        <LinkOverlay href="https://github.com/amaan4152/DVLSI-8bit-counter" target="_blank" rel="noopener noreferrer">
                          8-bit Counter
                        </LinkOverlay>
                      </Heading>
                      <Text fontSize="16px">
                        Developed 8-bit counter with Verilog. Synthesized counter with DC Compiler; designed floorplan and placement, clock, routing optimizations with IC Compiler II; passed DRC and LVS checks.
                      </Text>
                    </CardBody>
                  </Stack>
                </Card>
              </LinkBox>
              <LinkBox as='article' maxW='sm' p='5'>
                <Card
                  w="100%"
                  h="100%"
                  shadow="xl"
                  overflow='hidden'
                >
                  <Image
                    src="vit_model.png"
                    pt="5"
                    alt="Custom Probed ViT Model Pic"
                  />
                  <Stack>
                    <CardBody bg="gray.300" fontFamily="consolas">
                      <Heading size='md' fontFamily="consolas">
                        <LinkOverlay href="https://github.com/amaan4152/ViT-Probing" target="_blank" rel="noopener noreferrer">
                          Understanding Vision Transformers with Probing
                          Techniques
                        </LinkOverlay>
                      </Heading>
                      <Text fontSize="16px">
                        Proposed a method of analyzing a vision transformer
                        through probing techniques to gauge the classification performance of each layer
                        in the ViT except the classification head. Also performed a comparison study
                        between a ViT and a naive adaptation of a convolution model to determine the
                        significance of encoders and patch encoding.
                      </Text>
                    </CardBody>
                  </Stack>
                </Card>
              </LinkBox>
              <LinkBox as='article' maxW='sm' p='5'>
                <Card
                  w="100%"
                  h="100%"
                  shadow="xl"
                  overflow='hidden'
                >
                  <Image
                    src="RepresentativeImage.jpg"
                    pt="5"
                    alt="Computer Animation Research Poster Pic"
                  />
                  <Stack>
                    <CardBody bg="gray.300" fontFamily="consolas">
                      <Heading size='md' fontFamily="consolas">
                        <LinkOverlay href="https://github.com/amaan4152/Pose-Estimation-Applications" target="_blank" rel="noopener noreferrer">
                          3D Human Pose Estimation on Computer Animations
                        </LinkOverlay>
                      </Heading>
                      <Text fontSize="16px">
                        Utilized 2D human pose estimation algorithm, <Link color="teal.300" href="https://github.com/CMU-Perceptual-Computing-Lab/openpose">Openpose</Link>, to triangulate 3D positional information with stereophotogrammatry in real-time. Applied research to computer animations to work on low-cost alternative to body tracking using 2 RGB cameras.
                      </Text>
                    </CardBody>
                  </Stack>
                </Card>
              </LinkBox>
              <LinkBox as='article' maxW='sm' p='5'>
                <Card
                  w="100%"
                  h="100%"
                  shadow="xl"
                  overflow='hidden'
                >
                  <Image
                    src="https://media.istockphoto.com/id/1216376755/vector/compiler-concept-icon-software-development-machine-language-programming-data-filtering.jpg?s=612x612&w=0&k=20&c=MbSJrIayiUkVlYlD71StWsBayeOny8eKGAYncHHc7rQ="
                    pt="5"
                    alt="Compiler Sample Pic"
                  />
                  <Stack>
                    <CardBody bg="gray.300" fontFamily="consolas">
                      <Heading size='md' fontFamily="consolas">
                        <LinkOverlay href="https://github.com/amaan4152/ECE466-Compilers" target="_blank" rel="noopener noreferrer">
                          C Compiler
                        </LinkOverlay>
                      </Heading>
                      <Text fontSize="16px">
                        Developed C compiler from scratch. Composed of 5 stages: Lexical Analyzer, Syntax Parser, Semantic Analyzer, Intermediate Code Generator, Target Code Generator.
                      </Text>
                    </CardBody>
                  </Stack>
                </Card>
              </LinkBox>
            </VStack>
          </HStack>
        </VStack>
      </Center>
    </Layout>
  )
}

