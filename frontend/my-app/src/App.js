import React from 'react';
import {
  ChakraProvider,
  theme
} from '@chakra-ui/react';
import Search from './components/Search';
import Header from './components/Header'


function App() {
  return (
    <ChakraProvider theme={theme}>
      <Header/>
      <Search/>
  </ChakraProvider>
  );
}

export default App;
