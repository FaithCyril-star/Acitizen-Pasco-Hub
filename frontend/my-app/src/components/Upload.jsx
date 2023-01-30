import React, { Component } from 'react';
import {FormControl, IconButton} from '@chakra-ui/react';
import {ImUpload3} from 'react-icons/im';

class Upload extends Component {
    render() {
        return (
            <FormControl>
               <IconButton
                w = "10"
                h = "9" 
                mr="1"
                aria-label='Search database' 
                type="submit"
                colorScheme = "red"
                icon={<ImUpload3/>}></IconButton>
               </FormControl>
        );
    }
}

export default Upload;
