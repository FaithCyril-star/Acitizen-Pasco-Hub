import React,{useEffect} from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import { Routes, Route } from "react-router-dom";
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import Home from './pages/Home';
import Course from './pages/Course';
import FeedbackPage from './pages/FeedbackPage';
import Navbar from './components/Navbar';
import About from './pages/About';
import FileView from './pages/FileView';
import jwt_decode from "jwt-decode";
import { CoursesProvider } from './context';
import ProtectedRoute from './utils/protectedRoute';


function App() {
  useEffect(() => {

    const intervalId = setInterval(() => {
      const user = JSON.parse(localStorage.getItem('user'));

      if (user) {
        const decodedToken = jwt_decode(user.token);
        const currentTime = Math.floor(Date.now()/1000);
        
        if (decodedToken.exp < currentTime) {
          // Token has expired, remove it from local storage
          localStorage.removeItem('user');
          console.log('removed!');
        }
      }

      return () => clearInterval(intervalId);
    }, 120000);
    }, []);

  return (
    <ChakraProvider theme={theme}>
    <CoursesProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="signup" element={<SignupPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="feedback" element={<FeedbackPage />} />
          <Route path="about" element={<About />} />
          <Route path="courses/:courseName/:fileName" element={<ProtectedRoute><FileView /></ProtectedRoute>} />
          <Route path="courses/:courseName" element={<Course />} />
        </Routes>
        </CoursesProvider>
    </ChakraProvider>
  );
}

export default App;
