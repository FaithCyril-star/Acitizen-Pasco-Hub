import React, { Component } from 'react';
import Login from '../components/Login';
import Header from '../components/Header';
import {Box, Center} from '@chakra-ui/react';

class LoginPage extends Component {
    render() {
        return (
          <Box>
            <Header pt="95px" />
            <Center>
              <Box
                m="5%"
                p="90px"
                w="40vw"
                border="5px"
                borderRadius="10%"
                borderStyle="solid"
                borderColor="#ed3737"
                bg="white"
              >
                <Center>
                  <Login />
                </Center>
              </Box>
            </Center>
          </Box>
        );
    }
}

export default LoginPage;
