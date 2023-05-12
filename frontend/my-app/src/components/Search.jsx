import React,{useState, useContext} from 'react';
import { SearchIcon} from '@chakra-ui/icons';
import { Input,
    InputGroup,
    IconButton,
    InputRightElement,
    Center,
    Stack,
    Flex
 } from '@chakra-ui/react';
 import { useNavigate } from 'react-router-dom';
 import SearchOption from './SearchOption';
 import CoursesContext from '../context';
 import { getMatchingStrings } from '../utils/Filter';



function Search(props){
        const placeholder = props.placeholder;
        const [courseName,setCourseName] = useState("");
        const [filteredCourses,setFilteredCourses] = useState([]);
        const navigate = useNavigate();
        const { courses } = useContext(CoursesContext);
        const [boxshadow,setBoxShadow] = useState('none');
        
      
        
        function handleClick () {
            if (courseName) navigate(`/courses/${courseName}`);
        };


        function handleKeyDown(event){
        if (courseName && event.key === 'Enter') {
        navigate(`/courses/${courseName}`);
        }
        };

        function handleChange(event){

            const value = event.target.value;
            setCourseName(value);
            setFilteredCourses(getMatchingStrings(courses,value));
            
            if (getMatchingStrings(courses,value).length === 0){
                setBoxShadow('none');
            }
            else{
                setBoxShadow('xl');
            }
        };

    
        
        return (
            <Center p="8%">
            <Stack>
            <InputGroup w='35vw' zIndex = '100'>
                <Input
                    pr='4.5rem'
                    type='search'
                    id='search'
                    autoComplete="off"
                    placeholder={placeholder}
                    _placeholder={{ color: 'black' }}
                    onChange={handleChange}
                    onClick = {handleClick}
                    onKeyDown={handleKeyDown} 
                    position={'absolute'}
                />
                <InputRightElement>
                <IconButton 
                w = "10"
                h = "9" 
                mr="1"
                aria-label='Search database' icon={<SearchIcon />} 
                type="submit"/>
                </InputRightElement>   
            </InputGroup>
            <Flex bg='#FDF4F5' flexDirection='column' 
            boxShadow={boxshadow} pt='40px' borderRadius='md' w='100%'  color='black'>
            {filteredCourses.map(course => (
                <SearchOption course={course.name} />
              ))}
            </Flex>
            </Stack>
            </Center>
        );
    }

export default Search;
