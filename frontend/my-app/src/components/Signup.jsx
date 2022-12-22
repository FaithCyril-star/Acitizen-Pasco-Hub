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
    InputRightElement
  } from '@chakra-ui/react';
 
function Signup(props) { 
        const marginTop = props.mt 
        const [passwordType,setPasswordtype] = useState("password")
        return (
            <div>
                <FormControl w={400} margin='auto' mt={marginTop} isRequired>
                    <FormLabel >Username</FormLabel>
                    <Input type="text"/>
                    <FormLabel >Email</FormLabel>
                    <Input type="email"/>
                    <FormHelperText mb={5}>Please enter your acity email</FormHelperText>
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
                    <FormLabel>Confirm password</FormLabel>
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
                     onClick = {() => {passwordType === "password" ? setPasswordtype("text"):setPasswordtype("password")}} icon={passwordType === "password" ? <ViewOffIcon/> : <ViewIcon/>}/></InputRightElement>
                    </InputGroup>
                    <Center>
                    <Button _hover={{bg:"#ff3333"}} mt="8" type="submit">Submit</Button>
                    </Center>
                </FormControl>
            </div>
        );
}

export default Signup;
