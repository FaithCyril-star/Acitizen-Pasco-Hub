import React, { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import FileCard from '../components/Filecard';
import axios from 'axios';
import {Heading,Text,Flex,Box,IconButton,Button, Center,Divider,Spacer} from '@chakra-ui/react';
import BeatLoader from 'react-spinners/BeatLoader';
import { useNavigate } from 'react-router-dom';
import {BiArrowBack} from 'react-icons/bi';
// import DocViewer, { DocViewerRenderers } from 'react-doc-viewer';


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
                `http://localhost:9000/courses/${courseName}`
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
            <Flex my="20%" align="center" justify="center">
              <BeatLoader
                color="#ed3737"
                size={50}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            </Flex>
          );
        }

        if (error) {
          
        }

        return courseContent ? (
          <Box>
            <Flex direction={'row'}>
              <Heading m="30px">{courseContent.name}</Heading>
              <Spacer />
              <IconButton
                m="30px"
                isRound="true"
                colorScheme="red"
                onClick={() => navigate('/')}
                icon={<BiArrowBack />}
              >
                Back
              </IconButton>
            </Flex>
            <Divider variant="solid" />
            <Text m="20px">{courseContent.description}</Text>
            <Flex direction="row">
              {courseContent.files.map(file => (
                <FileCard file={file} />
              ))}
            </Flex>
          </Box>
        ) : (
          <Box my="15%">
            <Heading
              color="#ed3737"
              textAlign="center"
              fontSize={'60'}
              fontFamily="Roboto Slab"
            >
              Course Not Found :-(
            </Heading>
            <Center>
              <Button mt="20px" colorScheme="red" onClick={() => navigate('/')}>
                Go Home
              </Button>
            </Center>
          </Box>
        );
    };

export default Course;





 

