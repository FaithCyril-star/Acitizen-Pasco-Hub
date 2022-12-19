import React, { Component } from 'react';
import {Button} from '@chakra-ui/react';

class Upload extends Component {
    render() {
        return (
               <Button
               w ="200px"
               h="100px"
               borderRadius="50% 50% 25% 25%"
               boxShadow="0 20px 40px rgba(0, 0, 0, 0.1)"
               color='white'
               bg="#ff3333"
               _hover ={{
                bg:"#ff3333"
               }}
               >UPLOAD</Button>
        );
    }
}

export default Upload;
