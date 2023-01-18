import React, { useState,useEffect } from 'react';
import {
  Spacer,
  Button,
  ButtonGroup,
  Flex
} from '@chakra-ui/react';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import axios from 'axios';

function Navbar(){
  const navigate = useNavigate();
  const [isLoggedIn, setisLoggedIn] = useState(false);

  function checkLoginStatus() {
    // Checking if user is loggedIn
    axios.get(`http://localhost:9000/isloggedin`,{ withCredentials:true})
                .then((response) => {
                        // setisLoggedIn(response.data);
                        console.log(response.data);
                })
                .catch((error) => {
                    console.error(error)
                });
};

  checkLoginStatus();

  return (
            <Flex flex="1" boxShadow ='md' h='20' zIndex={'1'} position='fixed' w='100%' bg='white'>
                <ButtonGroup variant="link" spacing="8" m='40px' mt='20px'>
                  <Link key="home" to="/">Home</Link>
                  <Link key="about" to="/">About</Link>
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

