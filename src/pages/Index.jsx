import { Container, VStack, Heading, Text, Box, Image, Link, Button } from "@chakra-ui/react";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    setPosts(storedPosts);
  }, []);

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
        <Button as={RouterLink} to="/add-post" colorScheme="teal" size="lg">Add New Post</Button>
        <VStack spacing={4} align="stretch" width="full">
          {posts.map((post, index) => (
            <Box key={index} p={5} shadow="md" borderWidth="1px" borderRadius="md" width="full">
              <Heading fontSize="xl">{post.title}</Heading>
              {post.imageUrl && <Image src={post.imageUrl} alt={post.title} mt={4} />}
              <Text mt={4}>{post.content}</Text>
            </Box>
          ))}
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;