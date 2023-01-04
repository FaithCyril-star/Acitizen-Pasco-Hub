import React,{useState} from 'react';
import { SearchIcon} from '@chakra-ui/icons';
import { Input,
    InputGroup,
    IconButton,
    InputRightElement,
    Center,
 } from '@chakra-ui/react';
 import { useNavigate } from "react-router-dom";


function Search(props){
        const size = props.size;
        const width  = props.width;
        const placeholder = props.placeholder;
        const [courseName,setCourseName] = useState("");
        const navigate = useNavigate();
        
        function handleClick (event) {
        navigate(`/courses/${courseName}`);
        }

        function handleKeyDown(event){
        if (event.key === 'Enter') {
        navigate(`/courses/${courseName}`);
        }
        }

        return (
            <Center p="8%">
            <InputGroup size={size} w={width}>
                <Input
                    pr='4.5rem'
                    type='text'
                    placeholder={placeholder}
                    _placeholder={{ color: 'black' }}
                    onChange={event => setCourseName(event.currentTarget.value)}
                    onKeyDown={handleKeyDown} 
                />
                <InputRightElement>
                <IconButton 
                w = "10"
                h = "9" 
                mr="1"
                aria-label='Search database' icon={<SearchIcon />} 
                type="submit"
                onClick = {handleClick}/>
                </InputRightElement>   
            </InputGroup>
            </Center>
        );
    }

export default Search;
