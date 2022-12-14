import React, { Component } from 'react';
import { SearchIcon } from '@chakra-ui/icons';
import { Input,
    InputGroup,
    IconButton,
    InputRightElement } from '@chakra-ui/react'

class Search extends Component {
    render() {
        return (
            <InputGroup size='md' w='md'>
                <Input
                    pr='4.5rem'
                    type='text'
                    placeholder='Type course name...'
                />
                <InputRightElement width='4.5rem'>
                <IconButton mr='-8' p="5px" aria-label='Search database' icon={<SearchIcon />} />
                </InputRightElement>
            </InputGroup>
        );
    }

    
}

export default Search;
