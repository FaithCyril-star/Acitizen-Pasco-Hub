import React from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import {Box} from '@chakra-ui/react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function Home() {
    return (
      <Box>
        <Navbar />
        <Header mt="80px" />
        <Search width="40%" placeholder="Type course name here..." />
        <Box float="left">
          <Footer />
        </Box>
      </Box>
    );
}

export default Home;
