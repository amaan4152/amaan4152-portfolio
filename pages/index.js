import Layout from "../components/Layout";
import {
  Card,
  CardBody,
  Heading,
  Image,
  Link,
  HStack,
  Stack,
  VStack,
  Text,
  LinkBox,
  LinkOverlay,
  Center
} from "@chakra-ui/react"
import { motion } from 'framer-motion'

const ProjectCard = ({ href, title, img, imgAlt, children }) => {
  return (
    <LinkBox as='article' maxW='sm' p='5'>
      <Card
        as={motion.div}
        w="100%"
        h="100%"
        shadow="xl"
        overflow='hidden'
        whileHover={{ scale: 1.03 }}
      >
        <Image
          src={img}
          alt={imgAlt}
        />
        <Stack>
          <CardBody bg="gray.300" fontFamily="consolas">
            <Heading size='md' fontFamily="consolas">
              <LinkOverlay href={href} target="_blank" rel="noopener noreferrer">
                {title}
              </LinkOverlay>
            </Heading>
            {children}
          </CardBody>
        </Stack>
      </Card>
    </LinkBox>
  )
}

const PublicationCard = ({ href, width, img, imgAlt, title, children }) => {
  return (
    <LinkBox as='article' maxW='xl' p='5'>
      <Card
        as={motion.div}
        direction={{ base: 'column', sm: 'row' }}
        w="700px"
        h="100%"
        shadow="xl"
        overflow='hidden'
        whileHover={{ scale: 1.03 }}
        variant='outline'
        ml="-125px"
      >
        <Image
          src={img}
          alt={imgAlt}
          objectFit='cover'
          maxW={{ base: '100%', sm: '200px' }}
        />
        <Stack>
          <CardBody bg="red.100" fontFamily="consolas" maxW={width}>
            <Heading size='md' fontFamily="consolas">
              <LinkOverlay href={href} target="_blank" rel="noopener noreferrer">
                <Text as='i' wordWrap="normal">{title}</Text>
              </LinkOverlay>
            </Heading>
            <Text fontSize="16px">
              {children}
            </Text>
          </CardBody>
        </Stack>
      </Card>
    </LinkBox>
  )
}

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
            1st year Ph.D EE student at the Georgia Institute of Technology in the <Link color="red.300" href="https://gtcad.gatech.edu/" target="_blank" rel="noopener noreferrer">GTCAD</Link> lab under the supervision of Dr. Sung-Kyu Lim. Concentrating in VLSI and Computer Engineering, and specializing in EDA for digital design. Currently studying Back-Side Power Delivery Network (BS-PDN) design, analyses, and EDA flow with 3nm technology for system-level effects on GPUs and CPUs. Strongly interested in researching low-power machine learning accelerator architectures for 3D IC design, and novel EDA methodologies for improving PPA and IR-drop.
          </Text>
          <Heading
            fontSize="30px"
            fontFamily="consolas"
          >
            ls publications/
          </Heading>
          <PublicationCard
            href="https://dl.acm.org/doi/abs/10.1145/3544549.3583950"
            img="chi_conf.png"
            imgAlt="CHI 2023 Conference Image"
            title="Towards a Markerless 3D Pose Estimation Tool"
            width="800px"
          >
            <Text fontSize='16px'>
              <Text as='b'>Amaan Rahman</Text>, Mili Shah, Ya-Shian Li-Baboud, Ann Virts
            </Text>
            <br />
            <Text fontSize='12px'>
              Presented at the SIGCHI Conference in Hamburg, Germany.
            </Text>
          </PublicationCard>
          <PublicationCard
            href="https://www.mdpi.com/1424-8220/23/12/5604"
            img="https://cdnsecakmi.kaltura.com/p/684682/sp/68468200/thumbnail/entry_id/0_ie3f3yr7/width/1280"
            imgAlt="NIST Exoskeleton Research Image"
            title="Evaluation Methods and Measurement Challenges for Industrial Exoskeletons"
            width="800px"
          >
            <Text fontSize='16px'>
              Li-Baboud, Ya-Shian, Ann Virts, Roger Bostelman, Soocheol Yoon, <Text as='b'>Amaan Rahman</Text>, Lucia Rhode, Nishat Ahmed, and Mili Shah
            </Text>
          </PublicationCard>
          <Heading
            fontSize="30px"
            fontFamily="consolas"
            pt={5}
            pb={2}
          >
            ls showcase/
          </Heading>

          <HStack maxW="container.xl" width="100%">
            <VStack>
              <ProjectCard
                href="https://github.com/amaan4152/3DPoseEvaluator"
                title="3D Pose Evaluator Tool"
                img="nist_research.jpg"
                imgAlt="NIST Research"
              >
                3D human pose estimation evaluator tool composed of 3 algorithms: GAST-Net, VIBE, and Blazepose. Algorithms are evaluated on Optical Tracking System (OTS) data and metrics utilized are MPJPE and PJD. The tool is pipelined to later be utilized for exoskeleton kinematic evaluations.
              </ProjectCard>
              <ProjectCard
                href="https://github.com/amaan4152/ViT-Probing"
                title="Understanding Vision Transformers with Probing Techniques"
                img="vit_model.png"
                imgAlt="Custom Probed ViT Model Pic"
              >
                Proposed a method of analyzing a vision transformer
                through probing techniques to gauge the classification performance of each layer
                in the ViT except the classification head. Also performed a comparison study
                between a ViT and a naive adaptation of a convolution model to determine the
                significance of encoders and patch encoding.
              </ProjectCard>
            </VStack>

            <VStack>
              <ProjectCard
                href="https://github.com/amaan4152/Pose-Estimation-Applications"
                title="3D Human Pose Estimation on Computer Animations"
                img="RepresentativeImage.jpg"
                imgAlt="Computer Animation Research Poster Pic"
              >
                Utilized 2D human pose estimation algorithm, <Link color="red.300" href="https://github.com/CMU-Perceptual-Computing-Lab/openpose">Openpose</Link>, to triangulate 3D positional information with stereophotogrammatry in real-time. Applied research to computer animations to work on low-cost alternative to body tracking using 2 RGB cameras.
              </ProjectCard>
              <ProjectCard
                href="https://github.com/amaan4152/ECE472-DeepLearning"
                title="Deep Learning Projects"
                img="https://learnopencv.com/wp-content/uploads/2023/01/Convolutional-Neural-Networks-1024x611.png"
                imgAlt="CNN Demo Pic"
              >
                Developed multilayer perceptrons (MLP), Convolutional Neural Networks (CNN), residual networks, and transformers with Tensorflow.
              </ProjectCard>
              <ProjectCard
                href="https://github.com/amaan4152/ECE474-BayesianML"
                title="Bayesian Machine Learning Projects"
                img="EM_algo.png"
                imgAlt="Bayesian ML Demo Pic"
              >
                Various projects implemented Bayesion machine learning algorithms and techniques such as kernel methods, Expextation-Maximization, Monte Carlo Markov Chain.
              </ProjectCard>
              <ProjectCard
                href="https://github.com/amaan4152/ECE365-DSA_II"
                title="Data Structures & Algorithms II Projects"
                img="https://www.freecodecamp.org/news/content/images/2020/09/image-21.png"
                imgAlt="DSA Demo Pic"
              >
                Implemented various data structures in C++ such as hash tables, heaps, Djikstra's algorithm, and dynamic programming.
              </ProjectCard>
            </VStack>

            <VStack>
              <ProjectCard
                href="https://github.com/amaan4152/DVLSI-Interrupt_Controller"
                title="Interrupt Controller"
                img="intr_ctrl_layout.png"
                imgAlt="Layout Pic"
              >
                Developed interrupt controller with Verilog. Synthesized with DC Compiler; designed floorplan and placement, clock, routing optimizations with IC Compiler II; passed DRC checks.
              </ProjectCard>
              <ProjectCard
                href="https://github.com/amaan4152/DVLSI-8bit-counter"
                title="8-bit Counter"
                img="final_layout.png"
                imgAlt="Layout Pic"
              >
                Developed 8-bit counter with Verilog. Synthesized counter with DC Compiler; designed floorplan and placement, clock, routing optimizations with IC Compiler II; passed DRC and LVS checks.
              </ProjectCard>
              <ProjectCard
                href="https://github.com/amaan4152/ECE466-Compilers"
                title="C Compiler"
                img="https://media.istockphoto.com/id/1216376755/vector/compiler-concept-icon-software-development-machine-language-programming-data-filtering.jpg?s=612x612&w=0&k=20&c=MbSJrIayiUkVlYlD71StWsBayeOny8eKGAYncHHc7rQ="
                imgAlt="Compiler Sample Pic"
              >
                Developed C compiler from scratch. Composed of 5 stages: Lexical Analyzer, Syntax Parser, Semantic Analyzer, Intermediate Code Generator, Target Code Generator.
              </ProjectCard>
            </VStack>
          </HStack>
        </VStack>
      </Center>
    </Layout>
  )
}

