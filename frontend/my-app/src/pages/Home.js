import React from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import {Box} from '@chakra-ui/react';
import Footer from '../components/Footer';

function Home() {

    return (
      <Box>
        <Header pt="40" />
        <Search width="40%" placeholder="Type course name here..." />
        <Box float="left">
          <Footer />
        </Box>
      </Box>
    );
}

export default Home;
