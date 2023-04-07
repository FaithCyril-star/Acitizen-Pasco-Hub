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
    useToast
  } from '@chakra-ui/react';
  import { useNavigate } from 'react-router-dom';
  import axios from 'axios';
  import { usePromiseTracker,trackPromise } from "react-promise-tracker";
  import ClipLoader from 'react-spinners/ClipLoader';


function Login(props){
        const marginTop = props.mt 
        const [passwordType,setPasswordtype] = useState("password")
        const [formData,setFormData] = useState({})

        const navigate = useNavigate();
        const toast = useToast()

        
        function handleSubmit(event){
            event.preventDefault()

    trackPromise(
            axios.post(`http://localhost:9000/login`, formData,{
      withCredentials: true})
            .then((response) => { 
                // When the user logs in successfully, save the token to local storage
                const user = {
                    token: response.data.token,
                    username:response.data.username
                }
                
                const userJSON = JSON.stringify(user);
                localStorage.setItem("user", userJSON);
                navigate('/');
            })
            .catch((error) => {
                toast({
                        title: 'Login failed',
                        description: `${error.response.data}`,
                        status: 'error',
                        duration: 9000,
                        isClosable: true,
                        })
            }));
            
    };

        const { promiseInProgress } = usePromiseTracker();

        return (
            <div>
            <Heading textAlign='center' mt='-10' mb='10'>Login</Heading>
            { promiseInProgress ? <ClipLoader color='#ed3737' size={100}/> 
            :
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
                </form>}
            </div>
        );
    }

export default Login;


