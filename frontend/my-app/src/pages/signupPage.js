import React, { Component } from 'react';
import Signup from '../components/Signup';
import {Box, Center} from '@chakra-ui/react';
import Header from '../components/Header';

class signupPage extends Component {

    render() {
        return (
          <Box>
            <Header pt="95px"/>
            <Center>
              <Box
                bg="white"
                m="2%"
                p="90px"
                w="40%"
                border="5px"
                borderRadius="10%"
                borderStyle="solid"
                borderColor="#ed3737"
              >
                <Center>
                  <Signup />
                </Center>
              </Box>
            </Center>
          </Box>
        );
    }
}

export default signupPage;
