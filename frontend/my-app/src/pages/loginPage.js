import React, { Component } from 'react';
import Login from '../components/Login';
import {Box, Center} from '@chakra-ui/react';

class loginPage extends Component {
    render() {
        return (
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
                <Login />
              </Center>
            </Box>
          </Center>
        );
    }
}

export default loginPage;
