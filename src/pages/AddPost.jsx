import { useState } from "react";
import { Container, VStack, Heading, Input, Textarea, Button, FormControl, FormLabel } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const AddPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = { title, content, imageUrl };
    const existingPosts = JSON.parse(localStorage.getItem("posts")) || [];
    localStorage.setItem("posts", JSON.stringify([...existingPosts, newPost]));
    navigate("/");
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={8} align="stretch">
        <Heading as="h1" size="xl">Add New Post</Heading>
        <form onSubmit={handleSubmit}>
          <VStack spacing={4} align="stretch">
            <FormControl id="title" isRequired>
              <FormLabel>Title</FormLabel>
              <Input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            </FormControl>
            <FormControl id="content" isRequired>
              <FormLabel>Content</FormLabel>
              <Textarea value={content} onChange={(e) => setContent(e.target.value)} />
            </FormControl>
            <FormControl id="imageUrl">
              <FormLabel>Image URL</FormLabel>
              <Input type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
            </FormControl>
            <Button type="submit" colorScheme="blue" size="lg" width="full">Add Post</Button>
          </VStack>
        </form>
      </VStack>
    </Container>
  );
};

export default AddPost;