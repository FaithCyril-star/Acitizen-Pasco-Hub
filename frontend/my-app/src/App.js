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


function App() {

  return (
    <ChakraProvider 
    theme={theme}>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path="signup" element={<SignupPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="profile" element={<Profile />} />
      </Routes>
  </ChakraProvider>
  );
}

export default App;
