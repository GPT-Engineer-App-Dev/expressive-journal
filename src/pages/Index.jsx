import { Container, VStack, Heading, Text, Box, Image, Link } from "@chakra-ui/react";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={8} align="center">
        <Heading as="h1" size="2xl">Welcome to My Blog</Heading>
        <Image borderRadius="full" boxSize="150px" src="/images/profile.jpg" alt="Profile Image" />
        <Text fontSize="lg" textAlign="center">
          Hi, I'm [Your Name], a passionate blogger who loves to write about technology, programming, and personal development. Follow my journey and stay updated with my latest posts.
        </Text>
        <Box>
          <Link href="https://twitter.com" isExternal mx={2}>
            <FaTwitter size="30px" />
          </Link>
          <Link href="https://github.com" isExternal mx={2}>
            <FaGithub size="30px" />
          </Link>
          <Link href="https://linkedin.com" isExternal mx={2}>
            <FaLinkedin size="30px" />
          </Link>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;