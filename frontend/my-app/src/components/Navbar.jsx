import {
  Box,
  Spacer,
  Button,
  ButtonGroup,
  Flex,
  IconButton,
  useBreakpointValue
} from '@chakra-ui/react';
import { FiMenu } from 'react-icons/fi';
import { useNavigate } from "react-router-dom";

function Navbar(){
  const navigate = useNavigate();
  const isDesktop = useBreakpointValue({ base: false, lg: true })
  return (
      <Box>
            {isDesktop ? (
              <Flex flex="1" >
                <ButtonGroup variant="link" spacing="8" m='40px' mt='20px'>
                  {['Home', 'About'].map((item) => (
                    <Button key={item}>{item}</Button>
                  ))}
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
            ) : (
              <IconButton
                variant="ghost"
                icon={<FiMenu fontSize="1.25rem" />}
                aria-label="Open Menu"
              />
            )}
            </Box>
  )
};

export default Navbar;

