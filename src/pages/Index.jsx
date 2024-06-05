import { Container, Text, VStack, Box, Code, Link, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { FaTelegram, FaGithub, FaLinkedin } from "react-icons/fa";

const Index = () => {
  const { toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("gray.900", "gray.900");
  const textColor = useColorModeValue("gray.100", "gray.100");

  return (
    <Container centerContent maxW="100vw" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" bg={bgColor} color={textColor} onClick={toggleColorMode}>
      <VStack spacing={4} align="start">
        <Box>
          <Code p={4} borderRadius="md" w="full">
            <Text>{`{`}</Text>
            <Text pl={4}>{`"0KB.ORG": {`}</Text>
            <Text pl={8}>{`"error": false,`}</Text>
            <Text pl={8}>{`"packet-size": "0KB",`}</Text>
            <Text pl={8}>{`"response": "Coming soon...",`}</Text>
            <Text pl={8}>
              {`"site": `}
              <Link href="https://0KB.org" isExternal color="teal.300">
                "https://0KB.org"
              </Link>
              {`, `}
            </Text>
            <Text pl={8}>
              {`"domain-admin": `}
              <Link href="mailto:0@0KB.ORG" isExternal color="teal.300">
                "0@0KB.ORG"
              </Link>
              {``}
            </Text>
            <Text pl={4}>{`},`}</Text>
            <Text pl={4}>{`"Contact": {`}</Text>
            <Text pl={8}>
              {`"telegram": `}
              <Link href="https://t.me/zerokilobytes" isExternal color="teal.300">
                "https://t.me/zerokilobytes"
              </Link>
              {`, `}
            </Text>
            <Text pl={8}>
              {`"site": `}
              <Link href="https://johnle.org" isExternal color="teal.300">
                "https://johnle.org"
              </Link>
              {`, `}
            </Text>
            <Text pl={8}>
              {`"github": `}
              <Link href="https://github.com/9-5" isExternal color="teal.300">
                "https://github.com/9-5"
              </Link>
              {`, `}
            </Text>
            <Text pl={8}>
              {`"linkedin": `}
              <Link href="https://linkedin.com/in/johnle" isExternal color="teal.300">
                "https://linkedin.com/in/johnle"
              </Link>
              {`, `}
            </Text>
            <Text pl={8}>
              {`"email": `}
              <Link href="mailto:john@johnle.org" isExternal color="teal.300">
                "john@johnle.org"
              </Link>
              {``}
            </Text>
            <Text pl={4}>{`},`}</Text>
            <Text pl={4}>{`"Projects": {`}</Text>
            <Text pl={8}>{`"portfolio": "Coming soon."`}</Text>
            <Text pl={4}>{`}`}</Text>
            <Text>{`}`}</Text>
          </Code>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
