import { Box, Flex, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Micheal',
    location: 'Toronto, Canada',
    feedback: "I love this app! It's made chatting with my international friends so much easier.",
  },
  {
    name: 'Sara',
    location: 'New York, USA',
    feedback: "Amazing! The real-time translations are seamless, and I’ve made so many new friends.",
  },
  {
    name: 'Juan',
    location: 'Madrid, Spain',
    feedback: "This app has made my international business calls so much smoother.",
  },{
    name: 'Micheal',
    location: 'Toronto, Canada',
    feedback: "I love this app! It's made chatting with my international friends so much easier.",
  },
  {
    name: 'Sara',
    location: 'New York, USA',
    feedback: "Amazing! The real-time translations are seamless, and I’ve made so many new friends.",
  },
  {
    name: 'Juan',
    location: 'Madrid, Spain',
    feedback: "This app has made my international business calls so much smoother.",
  },{
    name: 'Micheal',
    location: 'Toronto, Canada',
    feedback: "I love this app! It's made chatting with my international friends so much easier.",
  },
  {
    name: 'Sara',
    location: 'New York, USA',
    feedback: "Amazing! The real-time translations are seamless, and I’ve made so many new friends.",
  },
  {
    name: 'Juan',
    location: 'Madrid, Spain',
    feedback: "This app has made my international business calls so much smoother.",
  },
  // Add more testimonials as needed
];

const Testimonials = () => {
  const MotionBox = motion.create(Box);

  return (
    <Box textAlign="center" py={8} px={4} overflow="hidden" maxW="100vw">
      <Text fontSize="2xl" fontWeight="bold" mb={4}>
        What Our Users Say
      </Text>

      {/* Wrapper for continuous animation */}
      <MotionBox
        display="flex"
        animate={{ x: ['0%', '-100%'] }}
        transition={{
          repeat: Infinity,
          duration: testimonials.length  * 3,
          ease: 'linear',
        }}
      >
        {testimonials.map((testimonial, index) => (
          <Flex
            key={index}
            direction="column"
            align="center"
            bg="gray.50"
            p={6}
            borderRadius="lg"
            backgroundColor="gray.100"
            mx={4}
            minW="300px"
          >
            <Box fontSize="3xl">⭐⭐⭐⭐⭐</Box>
            <Text mt={4}>"{testimonial.feedback}"</Text>
            <Text mt={2} fontWeight="bold">- {testimonial.name}</Text>
            <Text color="gray.500">{testimonial.location}</Text>
          </Flex>
        ))}
      </MotionBox>
    </Box>
  );
};

export default Testimonials;
