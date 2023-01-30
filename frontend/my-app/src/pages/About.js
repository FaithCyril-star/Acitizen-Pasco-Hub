import React, { Component } from 'react';
import Header from '../components/Header';
import { Box } from '@chakra-ui/react';

class About extends Component {
    render() {
        return (
          <Box>
            <Header pt="95px" />
            <Box textAlign="center" mt="30px" px='20%' fontSize='lg'>
              <p>
                As a student, you know that access to reliable and comprehensive
                resources can make all the difference when it comes to your
                education. That's why we're proud to offer this student resource
                hub, where you can find everything you need to succeed. Here,
                you will have access to an extensive library of past learning
                materials, including study guides, practice quizzes, and other
                resources used by senior students.
              </p>
              <br />
              <p>
                Not only can you benefit from these materials, but you can also
                play an active role in helping your peers by uploading your own
                study materials and resources after creating an account. By sharing your own knowledge and
                experience, you can make a positive impact on the educational
                journey of future students.
              </p>
              <br />
              <p>
                At this resource hub, our goal is to provide you with all the
                tools you need to excel in your studies at Acity and reach your full
                potential. Whether you're struggling with a particular subject,
                or just looking to supplement your learning with additional
                resources, we're here to help. So, don't hesitate to dive in and
                start exploring all that this center has to offer!
              </p>
            </Box>
          </Box>
        );
    }
}

export default About;
