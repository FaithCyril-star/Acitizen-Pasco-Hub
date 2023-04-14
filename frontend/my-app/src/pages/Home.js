import React from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import {Box} from '@chakra-ui/react';
import Footer from '../components/Footer';



function Home() {
    const courses = ["Math", "Science", "History", "English"]; 

    return (
      <Box>
        <Header pt="40" />
        <Search placeholder="Type course name here..." courses={courses}/>
        <Box float="left">
          <Footer />
        </Box>
      </Box>
    );
}

export default Home;
