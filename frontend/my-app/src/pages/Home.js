import React, { Component } from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import {Text,Link,Box} from '@chakra-ui/react';


class Home extends Component {
    render() {
        return (
<Box>
        <Header/>
        <Search width="400px" placeholder="Type course name here..." />
        <Text mt="3" textAlign='center' size='xm'>
            <Link color="blue" to="/login">Login</Link> or <Link color="blue" to="/signup">Signup</Link>
        </Text>
 </Box>
        );
    }
}

export default Home;
