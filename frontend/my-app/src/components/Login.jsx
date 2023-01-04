import React, { useState } from 'react';
import {ViewIcon,ViewOffIcon} from '@chakra-ui/icons'
import {
    FormControl,
    FormLabel,
    Input,
    Button,
    Center,
    IconButton,
    InputGroup,
    InputRightElement,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Heading,
    Text,
    Link
  } from '@chakra-ui/react';
  import { useDisclosure } from '@chakra-ui/react';
  import { useNavigate } from 'react-router-dom';

function Login(props){
        const marginTop = props.mt 
        const [passwordType,setPasswordtype] = useState("password")
        const { isOpen, onOpen, onClose } = useDisclosure()
        const navigate = useNavigate();

        return (
            <div>
            <Heading textAlign='center' mt='-10'>Login</Heading>
              <FormControl w={400} margin='auto' mt={marginTop} isRequired>
                    <FormLabel >Email</FormLabel>
                    <Input type="email"/>
                    <FormLabel>Password</FormLabel>
                    <InputGroup>
                    <Input type={passwordType}/>
                    <InputRightElement><IconButton 
                    w = "10"
                    h = "9" 
                    mr="1" 
                    bg="white"
                    _hover={{
                        background: "white"}}
                    _active={{
                        background: "white"}
                    }
                    onClick = {() => {passwordType === "password" ? setPasswordtype("text"):setPasswordtype("password")}} icon={passwordType === "password" ? <ViewOffIcon/> : <ViewIcon/>}></IconButton></InputRightElement>
                    </InputGroup>
                    <Text fontSize='sm'>Need an account? Sign up <Link onClick={() => navigate('/signup')}>here</Link></Text>
                    <Center>
                    <Button 
                    colorScheme='red'
                    mt="8" type="submit" onClick={onOpen}
                    >Submit</Button>
                    </Center>
                    <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                    <ModalHeader>Login</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        Do you want to login as?
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='red' mr={3} onClick={onClose}>
                        User
                        </Button>
                        <Button colorScheme='red' variant='ghost'>Admin</Button>
                    </ModalFooter>
                    </ModalContent>
                </Modal>
                </FormControl>  
            </div>
        );
    }

export default Login;


