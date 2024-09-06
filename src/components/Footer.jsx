import { Box, Flex, Text, Link, Icon } from '@chakra-ui/react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <Box as="footer" bg="black" color="white" pt={10} pb={0} px={4}>
      <Flex justify="space-between" align="center" maxW="1200px" mx="auto">
        {/* Left Section: Contact Information */}
        <Box>
          <Text fontSize="md" fontWeight="bold" mb={4}>
            Contact us
          </Text>
          <Text>Email: <Link href="mailto:Contact@globalchat.com" color="gray.300">Contact@globalchat.com</Link></Text>
          <Text>Address: Globalchat office, Toronto, Canada.</Text>
        </Box>

        {/* Right Section: Social Media Links */}
        <Box textAlign="right">
          <Text fontSize="md" fontWeight="bold" mb={4}>
            Follow Us
          </Text>
          <Flex gap={6} justifyContent="flex-end">
            <Link href="https://www.facebook.com" isExternal>
              <Icon as={FaFacebookF} boxSize={6} />
            </Link>
            <Link href="https://www.instagram.com" isExternal>
              <Icon as={FaInstagram} boxSize={6} />
            </Link>
            <Link href="https://www.twitter.com" isExternal>
              <Icon as={FaTwitter} boxSize={6} />
            </Link>
          </Flex>
        </Box>
      </Flex>

      {/* Logo Section */}
      <Box mt={8} marginBottom={0} padding={0} fontStyle="italic" fontWeight="bold" textAlign="center" fontSize="9xl" color="gray.400" letterSpacing="wider">
        LaSo
      </Box>
    </Box>
  );
};

export default Footer;
