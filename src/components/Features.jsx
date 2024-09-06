import { Box, Flex, Text, Image, Grid, GridItem, Button } from '@chakra-ui/react';

const FeaturesSection = () => {
  return (
    <Box as="section" py={16} bg="white" maxW="1200px" mx="auto" px={10}>
      {/* Main Text and Image Section */}
      <Flex direction={['column', 'column']} align="center" gap={8}>
        {/* Left Column - Text */}
        <Flex flex="1" direction={['column', 'row']} gap={10} justifyContent={`space-between`}>
          <Text fontSize="3xl" fontWeight="bold" lineHeight="short">
            Break Language <br /> Barriers.
          </Text>
          <Text fontSize="sm" mt={4} color="gray.600">
          Are you tired of language barriers hindering your global connections? 
          <br/>Say hello to our cutting-edge chat app, 
          <br/>designed to bridge the linguistic gap and connect people worldwide.
          </Text>
        </Flex>

        {/* Right Column - Image */}
        <Box flex="1" textAlign="center">
          <Image
            src="/hero-img.svg" 
            alt="People using mobile app"
            borderRadius="md"
            boxShadow="md"
          />
        </Box>
      </Flex>

      {/* Feature Boxes Section */}
      <Grid templateColumns={['1fr', 'repeat(3, 1fr)']} gap={6} mt={10} mb={20}>
        <GridItem>
          <Box p={6} borderRadius="md" bg="gray.100" textAlign="center" boxShadow="sm">
            <Text fontSize="md" fontWeight="bold">Real-Time Translation</Text>
            <Text fontSize="sm" mt={2} color="gray.500">
              Instantly translate messages to the language of your choice.
            </Text>
          </Box>
        </GridItem>

        <GridItem>
          <Box p={6} borderRadius="md" bg="gray.100" textAlign="center" boxShadow="sm">
            <Text fontSize="md" fontWeight="bold">Stay Connected Globally</Text>
            <Text fontSize="sm" mt={2} color="gray.500">
              Make friends and connect with people from around the world.
            </Text>
          </Box>
        </GridItem>

        <GridItem>
          <Box p={6} borderRadius="md" bg="gray.100" textAlign="center" boxShadow="sm">
            <Text fontSize="md" fontWeight="bold">No More Language Barriers</Text>
            <Text fontSize="sm" mt={2} color="gray.500">
              Enjoy conversations without feeling lost in translation.
            </Text>
          </Box>
        </GridItem>
      </Grid>

      {/* Second Section with Image and Button */}
      <Flex direction={['column', 'row']} align="center" gap={8} mt={20}>
        {/* Left Column - Text */}
        <Box flex="1">
          <Text fontSize="2xl" fontWeight="bold" lineHeight="short">
            Experience Seamless Conversations, <br /> Connect with People Worldwide
          </Text>
          <Text fontSize="sm" mt={4} color="gray.600">
            Our real-time translation feature ensures that language is no longer an obstacle. 
            Just type your message, and we'll handle the rest, instantly translating it into the language your conversation partner understands.
          </Text>
          <Text fontSize="sm" mt={4} color="gray.600">
            Discover new friends and broaden your horizons. Chat with people from different corners of the globe, exchange ideas, and learn about diverse cultures. The world is at your fingertips.
          </Text>

          <Button size="md" mt={6} colorScheme="blue">
            Learn more
          </Button>
        </Box>

        {/* Right Column - Image */}
        <Box flex="1" textAlign="center">
          <Image
            src="/checkout.svg" // Replace with your second image path
            alt="People chatting with phones"
            borderRadius="md"
            boxShadow="md"
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default FeaturesSection;
