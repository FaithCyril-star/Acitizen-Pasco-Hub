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
    InputRightElement
  } from '@chakra-ui/react';

function Login(props){
        const marginTop = props.mt 
        const [passwordType,setPasswordtype] = useState("password")
        return (
            <div>
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
                    <Center>
                    <Button 
                    colorScheme='red'
                    mt="8" type="submit">Submit</Button>
                    </Center>
                </FormControl>  
            </div>
        );
    }

export default Login;
