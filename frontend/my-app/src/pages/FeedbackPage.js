import React, { Component } from 'react';
import Header from '../components/Header';
import Feedback from '../components/Feedback';
import { Box, Center } from '@chakra-ui/react';
import Navbar from '../components/Navbar';

class FeedbackPage extends Component {
  render() {
    return (
      <Box>
        <Navbar />
        <Header pt="95px" />
        <Center>
          <Box
            m="5%"
            p="90px"
            w="40%"
            border="5px"
            borderRadius="10%"
            borderStyle="solid"
            borderColor="#ed3737"
            bg="white"
          >
            <Center>
              <Feedback />
            </Center>
          </Box>
        </Center>
      </Box>
    );
  }
}

export default FeedbackPage;
