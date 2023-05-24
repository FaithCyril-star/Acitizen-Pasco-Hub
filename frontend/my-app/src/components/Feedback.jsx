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
            <Text fontSize='sm' textAlign='center' mb='5'>Let us know your thoughts or<br/>any requests you may have!</Text>
            <form action="https://formsubmit.co/6eba76b99c2a7533c21087e46dcc82da" method="POST">
              <FormControl width={['100%','100%','100%','100%',400]} margin='auto' mt={this.props.marginTop} isRequired
                >
                    <FormLabel>Name</FormLabel>
                    <Input 
                    id="name"
                    name="name"
                    type="text"/>
                    <FormLabel>Year</FormLabel>
                    <Select type = "text" placeholder='Select year' name='year'>
                    <option value='Level 100'>Level 100</option>
                    <option value='Level 200'>Level 200</option>
                    <option value='Level 300'>Level 300</option>
                    <option value='Level 400'>Level 400</option>
                    </Select>
                    <FormLabel>Program of Study</FormLabel>
                    <Input 
                    id="program"
                    name="program"
                    type="text"/>
                    <FormLabel>Message</FormLabel>
                    <Textarea id='message' name='message'/>
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



