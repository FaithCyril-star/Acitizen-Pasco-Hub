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
  VStack,
  IconButton
} from '@chakra-ui/react';
import {GoKebabVertical} from 'react-icons/go';
import {BiCloudDownload}from 'react-icons/bi';
import {MdOpenWith} from 'react-icons/md';
import {AiOutlineInfoCircle} from 'react-icons/ai';
import fileDownload from 'js-file-download';
import axios from 'axios';

function Filecard(props){
        const url = props.file.fileUrl;
        const name = props.file.name;
        const uploaded_by = props.file.uploaded_by;

        const handleDownload = () => {
          axios
            .get(url, {
              responseType: 'blob',
            })
            .then(res => {
              fileDownload(res.data, name);
            });
        };

        return (
            <Card maxW='200px'  m='25px' boxShadow='xl'>
  <CardBody p='5' >
    {name}
  </CardBody>
  <Divider />
  <CardFooter h='30%' bg='gray.100'>
    <HStack>
      <VStack>
      <Text>Uploaded by</Text>
      <Text>{uploaded_by}</Text>
      </VStack>
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
    <MenuItem icon={<MdOpenWith />}>
      Open
    </MenuItem>
    <MenuItem icon={<BiCloudDownload />} onClick={handleDownload}>
      Download
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

