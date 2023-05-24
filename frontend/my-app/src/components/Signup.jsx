import React, { useState } from 'react';
import {ViewIcon,ViewOffIcon} from '@chakra-ui/icons'
import {
    FormControl,
    FormLabel,
    FormHelperText,
    Input,
    Button,
    Center,
    IconButton,
    InputGroup,
    InputRightElement,
    Text,
    Link,
    Heading,
    Alert,
    AlertIcon,
    AlertTitle,
    useToast
  } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { usePromiseTracker,trackPromise } from "react-promise-tracker";
import axios from 'axios';
import ClipLoader from 'react-spinners/ClipLoader';


 
function Signup(props) { 
        const marginTop = props.mt 
        const [passwordType,setPasswordtype] = useState("password")
        const [formData, setFormData] = useState({});

        const navigate = useNavigate();
        const toast = useToast()
        

        function handleSubmit(event){
            event.preventDefault()
            if (formData.password1 === formData.password){
                const userObject = { ...formData };

                delete userObject.password1;

        trackPromise(
                axios.post(`${process.env.REACT_APP_BACKEND_BASE_URL}/signup`, formData)
                .then(() => {
                        toast({
                        title: 'Account created.',
                        description: `We have created your account. Please check your inbox to verify`,
                        status: 'success',
                        duration: 9000,
                        isClosable: true,
                        })
                        navigate('/');
                })
                .catch((error) => {
                    toast({
                        title: 'Sign up failed',
                        description: `${error.response.data}`,
                        status: 'error',
                        duration: 9000,
                        isClosable: true,
                        })
                })
                );
    }
        }

        function handlePasswordMatch(){
            if (formData.password1 || formData.password){ return (formData.password1 === formData.password) ? (<Alert height='50px' status='success'>
                    <AlertIcon />
                    <AlertTitle>Passwords match!</AlertTitle>
                    </Alert>) :
                    (<Alert height='50px' status='error'>
                    <AlertIcon />
                    <AlertTitle>Passwords do not match!</AlertTitle>
                    </Alert>)}
        }

        const { promiseInProgress } = usePromiseTracker();

        return (
            <div>
                <Heading textAlign='center' mt='-10' mb='10'>Sign up</Heading>
                { promiseInProgress ? <ClipLoader color='#ed3737' size={100} speedMultiplier={0.5}/> 
                :
                <form onSubmit={handleSubmit}>
                <FormControl width={['100%','100%','100%','100%',400]} margin='auto' mt={marginTop} isRequired >
                    <FormLabel >Username</FormLabel>
                    <Input 
                    id="username"
                    name="username" 
                    type="text"
                    onChange={(event) =>
                    setFormData({ ...formData, [event.target.name]: event.target.value })
                    }/>
                    <FormLabel >Email</FormLabel>
                    <Input 
                    id="email"
                    name="email" 
                    type="email"
                    onChange={(event) =>
                    setFormData({ ...formData, [event.target.name]: event.target.value })
                    }/>
                    <FormHelperText mb={5}>Please enter your acity email</FormHelperText>
                    <FormLabel>Password</FormLabel>
                    <InputGroup>
                    <Input 
                    id="password"
                    name="password" 
                    type={passwordType}
                    onChange={(event) =>
                    setFormData({ ...formData, [event.target.name]: event.target.value })
                    }/>
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
                    <FormLabel>Confirm password</FormLabel>
                    <InputGroup>
                    <Input 
                    id="password1"
                    name="password1" 
                    type={passwordType}
                    onChange={(event) =>
                    setFormData({ ...formData, [event.target.name]: event.target.value })
                    }
                    />
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
                     onClick = {() => {passwordType === "password" ? setPasswordtype("text"):setPasswordtype("password")}} icon={passwordType === "password" ? <ViewOffIcon/> : <ViewIcon/>}/></InputRightElement>
                    </InputGroup>
                    <Text fontSize='sm' mb='20px'>Already have an account? Login <Link onClick={() => navigate('/login')}>here</Link></Text>
                    {handlePasswordMatch()}
                    <Center>
                    <Button 
                    colorScheme='red' mt="8" type="submit">Submit</Button>
                    </Center>
                </FormControl>
                </form>}
            </div>
        );
}

export default Signup;
