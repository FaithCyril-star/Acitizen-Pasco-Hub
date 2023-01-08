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
    Heading,
    Text,
    Link,
  } from '@chakra-ui/react';
  import { useNavigate } from 'react-router-dom';
  import axios from 'axios';

function Login(props){
        const marginTop = props.mt 
        const [passwordType,setPasswordtype] = useState("password")
        const [formData,setFormData] = useState({})
        const navigate = useNavigate();

        
        function handleSubmit(event){
            event.preventDefault()
                axios.post(`http://localhost:9000/login`, formData)
                .then((response) => {
                        console.log(response.data)
                })
                .catch((error) => {
                    console.error(error.response.data)
                });
    }
        

        return (
            <div>
            <Heading textAlign='center' mt='-10'>Login</Heading>
            <form onSubmit={handleSubmit}>
              <FormControl w={400} margin='auto' mt={marginTop} isRequired>
                    <FormLabel >Username</FormLabel>
                    <Input 
                    id="username"
                    name="username"
                    type="text"
                    onChange={(event) =>
                    setFormData({ ...formData, [event.target.name]: event.target.value })}/>
                    <FormLabel>Password</FormLabel>
                    <InputGroup>
                    <Input 
                    id="password"
                    name="password"
                    type={passwordType}
                    onChange={(event) =>
                    setFormData({ ...formData, [event.target.name]: event.target.value })}/>
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
                    mt="8" type="submit" 
                    >Submit</Button>
                    </Center>
                </FormControl>  
                </form>
            </div>
        );
    }

export default Login;


