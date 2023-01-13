import React, { Component } from 'react';
import {
    FormControl,
    FormLabel,
    Input,
    Button,
    Center,
    Heading,
    Text,
    Select,
    Textarea
  } from '@chakra-ui/react';

class Feedback extends Component {
    render() {
        return (
            <div>
            <Heading textAlign='center' mt='-10'>Feedback</Heading>
            <Text fontSize='sm' textAlign='center' mb='5'>Tell me what you think!</Text>
            <form>
              <FormControl w={400} margin='auto' mt={this.props.marginTop} isRequired>
                    <FormLabel>Name</FormLabel>
                    <Input 
                    id="name"
                    name="name"
                    type="text"/>
                    <FormLabel>Year</FormLabel>
                    <Select placeholder='Select year'>
                    <option value='year'>Level 100</option>
                    <option value='year'>Level 200</option>
                    <option value='year'>Level 300</option>
                    <option value='year'>Level 400</option>
                    </Select>
                    <FormLabel>Course</FormLabel>
                    <Input 
                    id="course"
                    name="course"
                    type="text"/>
                    <FormLabel>Message</FormLabel>
                    <Textarea/>
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
}

export default Feedback;



