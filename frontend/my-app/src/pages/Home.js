import React, { Component } from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import {Box, HStack,Button} from '@chakra-ui/react';
import Footer from '../components/Footer';


class Home extends Component {
    render() {
        return (
    <Box>
        <Box display="flex" justifyContent="flex-end" m='20px'>
            <HStack>
                <Button bg="#ed3737" color='white'
                _hover={{
                    boxShadow:'xl'
                }}
                _focus={{
                    bg:"#ed3737"
                }}>Login</Button>
                <Button bg="#ed3737" color='white'
                _hover={{
                    boxShadow:'xl'
                }}
                _focus={{
                    bg:"#ed3737"
                }}>Sign up</Button>
            </HStack>
        </Box>
        <Header/>
        <Search width="40%" placeholder='Type course name here...'/>
        <Box float='left'><Footer/></Box>
        </Box>
        );
    }
}

export default Home;
