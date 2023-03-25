import React from 'react';
import {
    FormControl,
    FormLabel,
    Input,
    Button,
    Center,
    Select,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure 
  } from '@chakra-ui/react'

function Upload() {
        const { isOpen, onOpen, onClose } = useDisclosure();
        
        return (
            <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>You'll be going a long way to helping others!</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
            <form>
              <FormControl margin='auto' isRequired>
                    <FormLabel>Course</FormLabel>
                    <Select type = "text" placeholder='Select Course' name='year'>
                    <option value='Physics'>Physics</option>
                    </Select>
                    <Input 
                    id='file' 
                    name='file' 
                    type='file' 
                    placeholder='Please upload file'></Input>
                    <Center>
                    <Button 
                    colorScheme='red'
                    mt="8" type="submit" 
                    >Submit</Button>
                    </Center>
                </FormControl>  
                </form> 
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={this.props.onClose}>
                Upload
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
        );
};

export default Upload;




