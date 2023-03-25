import React from 'react';
import {Card,
  CardBody,
  CardFooter,
  Text,
  Spacer,
  Divider, 
  Menu,
  MenuButton, 
  MenuList, 
  MenuItem, 
  IconButton,
  Image,
  Tooltip
} from '@chakra-ui/react';
import {GoKebabVertical} from 'react-icons/go';
import {BiCloudDownload}from 'react-icons/bi';
import {MdOpenWith} from 'react-icons/md';
import fileDownload from 'js-file-download';
import axios from 'axios';
import { useNavigate } from "react-router-dom";


function Filecard(props){
        const url = props.file.fileUrl;
        const name = props.file.name;
        const uploaded_by = props.file.uploaded_by;
        const thumbnailImage = props.file.filePreview;
        const size = props.file.size;

        const cardMessage = <div>Uploaded by: {uploaded_by}<br/>Size: {size}</div>;

        const navigate = useNavigate();

        const handleFileView = () => {
              navigate(`${window.location.pathname}/${name}`, { state: { docUrl:url} });
        }

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
          
            <Card w='250px' h='300px' m='25px' boxShadow='xl'>
  <Tooltip label={cardMessage} shouldWrapChildren={true} placement='auto-start'>
  <CardBody p='5' >
  <Image
      src={thumbnailImage}
      alt='file preview'
      w="300px" 
      h="190px"
    />
  </CardBody>
  </Tooltip>
  <Divider />
  <CardFooter as='flex' h='25%' bg='gray.100'>
      <Text fontSize='xs'>{name}</Text>
      <Spacer />
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
    <MenuItem icon={<MdOpenWith />} onClick={handleFileView}>
      Open
    </MenuItem>
    <MenuItem icon={<BiCloudDownload />} onClick={handleDownload}>
      Download
    </MenuItem>
  </MenuList>
</Menu>
  </CardFooter>
</Card>
        );
    }

export default Filecard;



