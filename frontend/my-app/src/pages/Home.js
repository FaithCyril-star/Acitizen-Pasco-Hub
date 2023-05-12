import React from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import {Box} from '@chakra-ui/react';
import Footer from '../components/Footer';

function Home() {

    return (
      <Box >
        <Header pt="40" />
        <Search placeholder="Type course name here..." />
        <div ><Footer /></div>
      </Box>
    );
}

export default Home;
