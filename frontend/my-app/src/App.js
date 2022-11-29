import React from 'react';
import {
  ChakraProvider,
  Input,
  Button,
  theme,
  Flex,
  VStack,
} from '@chakra-ui/react';


function App() {
  return (
    <ChakraProvider theme={theme}>
      <Flex>
        <VStack m='240px' ml='240px' mr='50px' spacing='24px'>
        <Input w={500} h={10} placeholder='Enter coursename here'/>
        <Button colorScheme='red'>Search</Button>
        </VStack>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
