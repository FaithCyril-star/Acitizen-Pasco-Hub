import React, { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import FileCard from '../components/Filecard';
import axios from 'axios';
import {Heading,Text,Flex,Box,Button, Center,Divider,Spacer} from '@chakra-ui/react';
import BeatLoader from 'react-spinners/BeatLoader';
import { useNavigate } from 'react-router-dom';



function Course() {
        const { courseName } = useParams();
        const [courseContent, setCourseContent] = useState("");
        const [loading, setLoading] = useState(true);
        const [error, setError] = useState(null);
        const navigate = useNavigate();

        useEffect(() => {
          async function fetchData() {
            setLoading(true);
            try {
              const response = await axios.get(
                `${process.env.REACT_APP_BACKEND_BASE_URL}/courses/${courseName}`
              );
              setCourseContent(response.data[0]);
            } catch (error) {
              setError(error);
            } finally {
              setLoading(false);
            }
          }
          fetchData();
        }, [courseName]);

        if (loading) {
          return (
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100vh',
            }}>
              <Flex >
                <BeatLoader
                  color="#ed3737"
                  size={50}
                  aria-label="Loading Spinner"
                  data-testid="loader"
                />
              </Flex>
            </div>
          );
        }

        if (error){
          return (
            <Box>
              <Heading
                color="#ed3737"
                textAlign="center"
                fontSize={'60'}
                fontFamily="Roboto Slab"
                pt="40"
              >
              {error}
              </Heading>
              <Center>
                <Button colorScheme="red" onClick={() => navigate('/')}>
                  Go Home
                </Button>
              </Center>
            </Box>
          );
        }

        return courseContent ? (
          <Box>
            <Flex pt="80px" direction="row" justifyContent="center">
              <Heading m="30px">{courseContent.name}</Heading>
              <Spacer />
            </Flex>
            <Text ml="20px">{courseContent.description}</Text>
            <Divider variant="solid" mt="20px" />
            { courseContent.files.length !== 0 ? 
            <Flex direction="row" flexWrap="wrap">
              {courseContent.files.map(file => (
                <FileCard file={file} />
              ))}
            </Flex> : <Heading
                      color="#ed3737"
                      textAlign="center"
                      fontSize={'60'}
                      fontFamily="Roboto Slab"
                      pt="20"
                    > No files uploaded yet
                    </Heading>
            }
          </Box>
        ) : (
          <Box>
            <Heading
              color="#ed3737"
              textAlign="center"
              fontSize={'60'}
              fontFamily="Roboto Slab"
              pt="40"
            > 404 Error <br/>
              Course Not Found :-(
            </Heading>
            <Center>
              <Button colorScheme="red" onClick={() => navigate('/')}>
                Go Home
              </Button>
            </Center>
          </Box>
        );
    };

export default Course;





 

