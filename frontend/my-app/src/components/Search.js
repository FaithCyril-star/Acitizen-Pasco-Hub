import React, { Component } from 'react';
import { SearchIcon} from '@chakra-ui/icons';
import { Input,
    InputGroup,
    IconButton,
    InputRightElement,
    Center
 } from '@chakra-ui/react'


class Search extends Component {
    render() {
        const size = this.props.size;
        const width  = this.props.width;
        const placeholder = this.props.placeholder;
        return (
            <Center>
            <InputGroup size={size} w={width} mt="80px">
                <Input
                    pr='4.5rem'
                    type='text'
                    placeholder={placeholder}
                />
                <InputRightElement>
                <IconButton 
                w = "10"
                h = "9" 
                mr="1"
                aria-label='Search database' icon={<SearchIcon />} />
                </InputRightElement>   
            </InputGroup>
            </Center>
        );
    }

    
}

export default Search;
