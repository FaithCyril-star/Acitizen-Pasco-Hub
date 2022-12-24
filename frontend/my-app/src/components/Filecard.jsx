import React from 'react';
import {Card,
  CardBody,
  CardFooter, 
  HStack,
  Text,
  Divider, 
  Menu,
  MenuButton, 
  MenuList, 
  MenuItem, 
  Image,
  IconButton,
} from '@chakra-ui/react';
import {GoKebabVertical} from 'react-icons/go';
import {BiCloudDownload}from 'react-icons/bi';
import {MdOpenWith} from 'react-icons/md';
import {AiOutlineInfoCircle} from 'react-icons/ai';


function Filecard(props){
        const url = props.url;
        const name = props.name;
        return (
            <Card maxW='200px'>
  <CardBody p='-10'>
    <Image
      src={url}
      alt='File preview'
    />
  </CardBody>
  <Divider />
  <CardFooter bg='gray.100' h='30%'>
    <HStack>
    <Text mr='10' fontSize='sm'>{name}</Text>
    <Menu isLazy>
  <MenuButton
    as={IconButton}
    aria-label='Options'
    icon={<GoKebabVertical />}
    _hover={{
      bg:'gray.100',
    }}
    _active={{
      bg:'gray.100',
    }}
  />
  <MenuList>
    <MenuItem icon={<BiCloudDownload />}>
      Download
    </MenuItem>
    <MenuItem icon={<MdOpenWith />}>
      Open
    </MenuItem>
    <MenuItem icon={<AiOutlineInfoCircle />}>
      Info
    </MenuItem>
  </MenuList>
</Menu>
</HStack>
  </CardFooter>
</Card>
        );
    }

export default Filecard;

