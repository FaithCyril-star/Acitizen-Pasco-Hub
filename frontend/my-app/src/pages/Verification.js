import { Box, Heading, Text, Link } from "@chakra-ui/react";

const VerificationSuccessPage = () => {
  return (
    <Box textAlign="center" p={'40'}>
      <Heading color="green.500">Email Verification Success</Heading>
      <Text fontSize="xl" mb={4}>
        Your email has been successfully verified.
      </Text>
      <Text fontSize="xl" mb={8}>
        Thank you for verifying your email.
      </Text>
      <Link
        as="a"
        href="/login"
        color="white"
        bg="green.500"
        px={8}
        py={4}
        borderRadius="md"
        fontSize="xl"
        _hover={{ bg: "green.600" }}
        _focus={{ outline: "none" }}
      >
        Login
      </Link>
    </Box>
  );
};

export default VerificationSuccessPage;
