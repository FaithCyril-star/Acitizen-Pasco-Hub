import React, { Component } from 'react';
import { Heading } from '@chakra-ui/react'

class Header extends Component {
    render() {
        return (
            <div>
                <Heading 
                color = "#ed3737"
                pt={this.props.pt} 
                textAlign="center" 
                fontSize={"60"}
                fontFamily='Roboto Slab'>Acity Pasco Hub</Heading>
            </div>
        );
    }
}

export default Header;
