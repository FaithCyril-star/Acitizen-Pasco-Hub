import React from 'react';
import { useNavigate } from 'react-router-dom';
import  {Box} from '@chakra-ui/react';

function SearchOption(props) {
    const course = props.course;
    const navigate = useNavigate();

    function handleClickOption(){
        navigate(`/courses/${course}`);
      }

    return (
            <Box as='button' 
            textAlign='left' 
            pl='15px' 
            my='2'
            onClick={handleClickOption}>{course}</Box>
    );
}

export default SearchOption;
