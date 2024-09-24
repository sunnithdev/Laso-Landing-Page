import { Box, Text, Button, Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';
// import Flag from 'react-flagpack';

const MotionBox = motion.create(Box);

const HeroSection = () => {
  // Animation for rotating each flag in a circle independently
  const createRotationVariants = (duration) => ({
    rotate: {
      rotate: [0, 200],
      transition: {
        repeat: Infinity,
        duration: duration,  // Different duration for each circle
        ease: 'linear',
      },
    },
  });

  return (
    <Box as="section" bg="white" py={[10,16]} position="relative" height={['90vh','80vh']} overflow="hidden">
      {/* Main content with heading and button */}
      <Box zIndex="10" direction="column" position="relative" align="center" mx="auto" textAlign="center">
        <Text fontSize="3xl" fontWeight="bold" lineHeight="shorter">
          Bridging Languages, <br /> Connecting Worlds
        </Text>
        <Text fontSize="sm" color="gray.600" mt={4}>
          Unlock the world of cross-language communication <br /> with our real-time translation application.
        </Text>
        <Button size="md" mt={6} colorScheme="blue" onClick={() => window.location.href = 'https://laso-frontend.vercel.app/'}>
          Try Using Web Application
        </Button>
      </Box>

      {/* Wrapper to center MotionBoxes */}
      <Box zIndex="0" position="relative" marginTop={['-20%','-50%',"-20%"]} display="flex" justifyContent="center" alignItems="center" minH="100vh">
        {/* Multiple Rotating Circles of Flags with Independent Speeds */}
          <MotionBox
            key={1300}
            variants={createRotationVariants(11 * 5)}  // Increase duration for each circle
            animate="rotate"
            position="absolute"
            width={[`${1300 * 0.5}px`, `${1300 * 0.7}px`, `${1300}px`]}
            height={[`${1300 * 0.5}px`, `${1300 * 0.7}px`, `${1300}px`]}
            border={`2px solid rgba(0, 0, 0, 0.8)`}
            transform="translate(-50%, -50%)"
            borderRadius="50%"
          >
            {/* USA Flag */}
            <Box position="absolute" margin="-20px" backgroundColor="white" border={`2px solid rgba(0, 0, 0, 0.8)`} borderRadius="50%" padding="8px" top="0" left="50%" transform="translateX(-50%)">
            <Text fontSize="2xl" fontWeight="bold" lineHeight="shorter">
            🇺🇸
            </Text>
            </Box>
            {/* Canada Flag */}
            <Box position="absolute" margin="-20px" border={`2px solid rgba(0, 0, 0, 0.8)`} backgroundColor="white" borderRadius="50%"  padding="8px" top="50%" right="0" transform="translateY(-50%)">
            <Text fontSize="2xl" fontWeight="bold" lineHeight="shorter">
            🇨🇦
            </Text>
            </Box>
            {/* France Flag */}
            <Box position="absolute" margin="-20px" border={`2px solid rgba(0, 0, 0, 0.8)`} backgroundColor="white" borderRadius="50%" padding="8px" bottom="0" left="50%" transform="translateX(-50%)">
            <Text fontSize="2xl" fontWeight="bold" lineHeight="shorter">
            🇫🇷
            </Text>
            </Box>
            {/* Germany Flag */}
            <Box position="absolute" margin="-20px" border={`2px solid rgba(0, 0, 0, 0.8)`} backgroundColor="white" borderRadius="50%" padding="8px" top="50%" left="0" transform="translateY(-50%)">
            <Text fontSize="2xl" fontWeight="bold" lineHeight="shorter">
            🇩🇪
            </Text>
            </Box>
            <Box position="absolute" margin="-20px" border={`2px solid rgba(0, 0, 0, 0.8)`} backgroundColor="white" borderRadius="50%" padding="8px" top="50%" left="0" transform="translateY(-50%)">
            <Text fontSize="2xl" fontWeight="bold" lineHeight="shorter">
            🇮🇳
            </Text>
            </Box>
            <Box position="absolute" margin="-20px" border={`2px solid rgba(0, 0, 0, 0.8)`} backgroundColor="white" borderRadius="50%" padding="8px" top="50%" left="0" transform="translateY(-50%)">
            <Text fontSize="2xl" fontWeight="bold" lineHeight="shorter">
            🇲🇽
            </Text>
            </Box>
            {/* Add more flags as needed */}
          </MotionBox>

          <MotionBox
            key={1050}
            variants={createRotationVariants(20)}  // Increase duration for each circle
            animate="rotate"
            position="absolute"
            width={[`${1050 * 0.5}px`, `${1050 * 0.7}px`, `${1050}px`]}
            height={[`${1050 * 0.5}px`, `${1050 * 0.7}px`, `${1050}px`]}
            border={`2px solid rgba(0, 0, 0, 0.8)`}
            transform="translate(-50%, -50%)"
            borderRadius="50%"
          >
            {/* USA Flag */}
            <Box position="absolute" margin="-20px" backgroundColor="white" border={`2px solid rgba(0, 0, 0, 0.8)`} borderRadius="50%" padding="8px" top="0" left="50%" transform="translateX(-50%)">
            <Text fontSize="2xl" fontWeight="bold" lineHeight="shorter">
            🇦🇫
            </Text>
            </Box>
            {/* Canada Flag */}
            <Box position="absolute" margin="-20px" border={`2px solid rgba(0, 0, 0, 0.8)`} backgroundColor="white" borderRadius="50%"  padding="8px" top="50%" right="0" transform="translateY(-50%)">
            <Text fontSize="2xl" fontWeight="bold" lineHeight="shorter">
            🇧🇭
            </Text>
            </Box>
            {/* France Flag */}
            <Box position="absolute" margin="-20px" border={`2px solid rgba(0, 0, 0, 0.8)`} backgroundColor="white" borderRadius="50%" padding="8px" bottom="0" left="50%" transform="translateX(-50%)">
            <Text fontSize="2xl" fontWeight="bold" lineHeight="shorter">
            🇰🇭
            </Text>
            </Box>
            {/* Germany Flag */}
            <Box position="absolute" margin="-20px" border={`2px solid rgba(0, 0, 0, 0.8)`} backgroundColor="white" borderRadius="50%" padding="8px" top="50%" left="0" transform="translateY(-50%)">
            <Text fontSize="2xl" fontWeight="bold" lineHeight="shorter">
            🇩🇰
            </Text>
            </Box>
            <Box position="absolute" margin="-20px" border={`2px solid rgba(0, 0, 0, 0.8)`} backgroundColor="white" borderRadius="50%" padding="8px" top="50%" left="0" transform="translateY(-50%)">
            <Text fontSize="2xl" fontWeight="bold" lineHeight="shorter">
            🇭🇰
            </Text>
            </Box>
            <Box position="absolute" margin="-20px" border={`2px solid rgba(0, 0, 0, 0.8)`} backgroundColor="white" borderRadius="50%" padding="8px" top="50%" left="0" transform="translateY(-50%)">
            <Text fontSize="2xl" fontWeight="bold" lineHeight="shorter">
            🇯🇵
            </Text>
            </Box>
            {/* Add more flags as needed */}
          </MotionBox>

          <MotionBox
            key={800}
            variants={createRotationVariants(10)}  // Increase duration for each circle
            animate="rotate"
            position="absolute"
            width={[`${800 * 0.5}px`, `${800 * 0.7}px`, `${800}px`]}
            height={[`${800 * 0.5}px`, `${800 * 0.7}px`, `${800}px`]}
            border={`2px solid rgba(0, 0, 0, 0.8)`}
            transform="translate(-50%, -50%)"
            borderRadius="50%"
          >
            {/* USA Flag */}
            <Box position="absolute" margin="-20px" backgroundColor="white" border={`2px solid rgba(0, 0, 0, 0.8)`} borderRadius="50%" padding="8px" top="0" left="50%" transform="translateX(-50%)">
            <Text fontSize="2xl" fontWeight="bold" lineHeight="shorter">
            🇲🇾
            </Text>
            </Box>
            {/* Canada Flag */}
            <Box position="absolute" margin="-20px" border={`2px solid rgba(0, 0, 0, 0.8)`} backgroundColor="white" borderRadius="50%"  padding="8px" top="50%" right="0" transform="translateY(-50%)">
            <Text fontSize="2xl" fontWeight="bold" lineHeight="shorter">
            🇲🇨
            </Text>
            </Box>
            {/* France Flag */}
            <Box position="absolute" margin="-20px" border={`2px solid rgba(0, 0, 0, 0.8)`} backgroundColor="white" borderRadius="50%" padding="8px" bottom="0" left="50%" transform="translateX(-50%)">
            <Text fontSize="2xl" fontWeight="bold" lineHeight="shorter">
            🇳🇴
            </Text>
            </Box>
            {/* Germany Flag */}
            <Box position="absolute" margin="-20px" border={`2px solid rgba(0, 0, 0, 0.8)`} backgroundColor="white" borderRadius="50%" padding="8px" top="50%" left="0" transform="translateY(-50%)">
            <Text fontSize="2xl" fontWeight="bold" lineHeight="shorter">
            🇷🇺
            </Text>
            </Box>
            <Box position="absolute" margin="-20px" border={`2px solid rgba(0, 0, 0, 0.8)`} backgroundColor="white" borderRadius="50%" padding="8px" top="50%" left="0" transform="translateY(-50%)">
            <Text fontSize="2xl" fontWeight="bold" lineHeight="shorter">
            🇷🇸
            </Text>
            </Box>
            <Box position="absolute" margin="-20px" border={`2px solid rgba(0, 0, 0, 0.8)`} backgroundColor="white" borderRadius="50%" padding="8px" top="50%" left="0" transform="translateY(-50%)">
            <Text fontSize="2xl" fontWeight="bold" lineHeight="shorter">
            🇹🇼
            </Text>
            </Box>
            {/* Add more flags as needed */}
          </MotionBox>

        {/* Add the SVG at the center */}
        <Box zIndex="10" position="absolute" top={['30%','35%',"40%"]}>
          <Image src="/phone.svg" alt="SVG Logo" width= "500px" height="600px"/>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;
