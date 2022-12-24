import React from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import {Box, HStack,Button} from '@chakra-ui/react';
import Footer from '../components/Footer';
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();
    return (
      <Box>
        <Box display="flex" justifyContent="flex-end" m="20px">
          <HStack>
            <Button
              bg="#ed3737"
              color="white"
              _hover={{
                boxShadow: 'xl',
              }}
              _focus={{
                bg: '#ed3737',
              }}
              onClick={() => navigate('/login')}>
              Login
            </Button>
            <Button
              bg="#ed3737"
              color="white"
              _hover={{
                boxShadow: 'xl',
              }}
              _focus={{
                bg: '#ed3737',
              }}
              onClick={() => navigate('/signup')}
            >
              Sign up
            </Button>
          </HStack>
        </Box>
        <Header />
        <Search width="40%" placeholder="Type course name here..." />
        <Box float="left">
          <Footer />
        </Box>
      </Box>
    );
}

export default Home;
