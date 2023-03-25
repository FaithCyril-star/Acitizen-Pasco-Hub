import React from 'react';
import {
  Spacer,
  Button,
  ButtonGroup,
  Flex
} from '@chakra-ui/react';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';


function Navbar(){
  const navigate = useNavigate();

  return (
            <Flex flex="1" boxShadow ='md' h='20' zIndex={'100'} position='fixed' w='100%' bg='white'>
                <ButtonGroup variant="link" spacing="8" m='40px' mt='20px'>
                  <Link key="home" to="/">Home</Link>
                  <Link key="about" to="/about">About</Link>
                  <Link key="feedback" to="/feedback">Feedback</Link>
                </ButtonGroup>
                <Spacer />
                <ButtonGroup spacing="3" m='40px' mt='20px'>
                              <Button
              colorScheme='red'
              onClick={() => navigate('/login')}>
              Login
            </Button>
            <Button
              colorScheme='red'
              onClick={() => navigate('/signup')}
            >
              Sign up
            </Button>
                </ButtonGroup>
              </Flex>
  )
};

export default Navbar;

