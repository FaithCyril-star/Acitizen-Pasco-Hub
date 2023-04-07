import React, { useState } from 'react';
import {
  Spacer,
  Button,
  ButtonGroup,
  Flex,
  Select,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormLabel,
  Input,
  Center,
  useToast
} from '@chakra-ui/react';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { usePromiseTracker,trackPromise } from "react-promise-tracker";
import BarLoader from 'react-spinners/BarLoader';


function Navbar(){
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast()
  
  const [course_name,setCourseName] = useState('');
  const [courses,setCourses] = useState([]);
  const [file, setFile] = useState(null);

  
  // Retrieve the JSON string from local storage
  const userJSON = localStorage.getItem("user");

  // Convert the JSON string to an object
  const user = JSON.parse(userJSON);


  function getCourses(){
    axios.get(`http://localhost:9000/admin`)
    .then((response)=>{
      setCourses(response.data)})
    .catch((err) => console.log(err))
  };

  function handleUpload(event){
    event.preventDefault();

    const formData = new FormData();

    formData.append('file', file);
    formData.append('course_name',course_name);
    formData.append('uploaded_by',user.username);
    
    trackPromise(
    axios.post(`http://localhost:9000/upload`, formData, {
      headers: {
        'x-access-token': user.token,
        'Content-Type': 'multipart/form-data'
      }})
      .then(() => {
        toast({
        title: 'Upload successful',
        description: `We have uploaded your document!`,
        status: 'success',
        duration: 9000,
        isClosable: true,
        })
        })
        .catch((error) => {
            toast({
                title: 'Upload unsuccessful',
                description: `${error.response.data}`,
                status: 'error',
                duration: 9000,
                isClosable: true,
                })
        }));
    };

    function handleFileChange(event) {
      setFile(event.target.files[0]);
    }

  getCourses();
  
  const { promiseInProgress } = usePromiseTracker();

  return (
            <Flex flex="1" boxShadow ='md' h='20' zIndex={'100'} position='fixed' w='100%' bg='white'>
                <ButtonGroup variant="link" spacing="8" m='40px' mt='20px'>
                  <Link key="home" to="/">Home</Link>
                  <Link key="about" to="/about">About</Link>
                  <Link key="feedback" to="/feedback">Feedback</Link>
                </ButtonGroup>
                <Spacer />
                { user ? <ButtonGroup spacing="3" m='40px' mt='20px'>
        <Button
          colorScheme='red'
          onClick={onOpen}>
          Upload
        </Button>
        
        <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign='center'>This means so much to us!</ModalHeader>
          <ModalCloseButton />
          { promiseInProgress ? <Center mt='10' mb='20'><BarLoader color='#ed3737' width={200} height={10}/></Center>
                :  
          <><ModalBody>
          <form>
                    <FormLabel>Course</FormLabel>
                    <Select 
                    type = "text" 
                    placeholder='Select course' 
                    name='course_name' 
                    onChange={(event) =>
                    setCourseName(event.target.value)}>
                    {courses.map((course) => (<option value={course.name}>{course.name}</option>))}
                    </Select>
                    <FormLabel>File</FormLabel>
                    <Input 
                    id="file"
                    name="file"
                    type="file"
                    p='4px'
                    onChange = {handleFileChange}
                    />
                </form> 
          </ModalBody>

          <ModalFooter>
            <Button m='auto' colorScheme='red' onClick={handleUpload}>
              Submit
            </Button>
          </ModalFooter></>}
        </ModalContent>
      </Modal>

            <Button
              colorScheme='red' >
              Logout
            </Button>
                </ButtonGroup> :
                <ButtonGroup spacing="3" m='40px' mt='20px'>
              <Button
              colorScheme='red'
              onClick={() => navigate('/login')}
              >
              Login
            </Button>
            <Button
              colorScheme='red'
              onClick={() => navigate('/signup')}
            >
              Sign up
            </Button>
                </ButtonGroup>}
              </Flex>
  )
};

export default Navbar;
