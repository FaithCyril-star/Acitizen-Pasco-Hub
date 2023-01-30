import React from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import { Routes, Route } from "react-router-dom";
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Course from './pages/Course';
import FeedbackPage from './pages/FeedbackPage';
import Navbar from './components/Navbar';
import About from './pages/About';

function App() {


  return (
    <ChakraProvider theme={theme}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="signup" element={<SignupPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="profile" element={<Profile />} />
          <Route path="feedback" element={<FeedbackPage />} />
          <Route path="about" element={<About />} />
          <Route path="courses/:courseName" element={<Course />} />
        </Routes>
    </ChakraProvider>
  );
}

export default App;
