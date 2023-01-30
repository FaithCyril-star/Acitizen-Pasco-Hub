import React, { Component } from 'react';
import {Heading, Flex, Spacer, HStack, Box, Divider} from '@chakra-ui/react';
import Search from '../components/Search';
import Upload from '../components/Upload';

class Profile extends Component {
    render() {
        return (
          <Box pt="95px">
            <Heading as="h1" fontWeight="medium" ml="30px">
              Welcome, Faith
            </Heading>
            <Flex>
              <Heading as="h2" ml="30px" fontWeight="medium" size="lg">
                Your uploads
              </Heading>
              <Spacer />
              <HStack>
                <Search width="15rem" placeholder="Search course..." />
                <Upload />
              </HStack>
            </Flex>
            <Divider variant="solid" mt="10px" />
          </Box>
        );
    }
}

export default Profile;
