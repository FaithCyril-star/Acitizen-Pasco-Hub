import React from 'react';
import { SearchIcon} from '@chakra-ui/icons';
import { Input,
    InputGroup,
    IconButton,
    InputRightElement,
    Center,
 } from '@chakra-ui/react';


function Search(props){
        const size = props.size;
        const width  = props.width;
        const placeholder = props.placeholder;
        return (
            <Center>
            <InputGroup size={size} w={width} m="125px">
                <Input
                    pr='4.5rem'
                    type='text'
                    placeholder={placeholder}
                    _placeholder={{ color: 'black' }}
                    borderColor = '#0080ff'
                    boxShadow = 'xl'
                    _hover ={{
                        borderColor:'#0080ff'
                    }}
                    _focus = {{
                        boxShadow:'xl' ,
                    }}
                    
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

export default Search;
