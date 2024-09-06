import { Box, Flex, Link, Text, Button, IconButton, useDisclosure, Stack } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure(); // Controls mobile menu state

  return (
    <Box as="header" bg="white" p={4} boxShadow="md">
      <Flex justify="space-between" align="center" maxW="1200px" mx="auto">
        {/* Logo */}
        <Text fontSize="5xl" ml={1} fontWeight="bolder" fontStyle="italic" color="gray.800">
          LaSo
        </Text>

        {/* Desktop Links */}
        <Flex align="center" display={['none', 'none', 'flex']}>
          <Link fontSize="md" fontWeight="bold" href="#features" mx={4}>Features</Link>
          <Link fontSize="md" fontWeight="bold" href="#faqs" mx={4}>FAQs</Link>
          <Link fontSize="md" fontWeight="bold" href="#contact" mx={4}>Contact Us</Link>
        </Flex>

        {/* Mobile Hamburger Icon */}
        <IconButton
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          display={['inline-flex', 'inline-flex', 'none']}
          onClick={isOpen ? onClose : onOpen}
          variant="outline"
          aria-label="Toggle Navigation"
        />

        {/* Mobile Menu */}
        {isOpen && (
          <Box position="absolute" top="80px" left="0" width="100%" bg="white" boxShadow="lg" zIndex="999">
            <Stack spacing={4} p={4} as="nav" align="center">
              <Link fontSize="sm" fontWeight="bold" href="#features" onClick={onClose}>Features</Link>
              <Link fontSize="sm" fontWeight="bold" href="#faqs" onClick={onClose}>FAQs</Link>
              <Link fontSize="sm" fontWeight="bold" href="#contact" onClick={onClose}>Contact Us</Link>
              <Button colorScheme="blue" width="100%" onClick={onClose}>Get Started</Button>
            </Stack>
          </Box>
        )}
      </Flex>
    </Box>
  );
};

export default Header;
