// import { useEffect } from 'react';
// import axios from 'axios';

// const useAuth = () => {

//   useEffect(() => {
//     const checkSession = async () => {
//       try {
//         // Make an API call to check if the session is still active
//         const response = await axios.get(`http://localhost:9000/isloggedIn`);
//         if (!response.data) {
//           // Set the user data from local storage
//           localStorage.removeItem('user');
//         } 
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     // Check the session every 2 minutes for test
//     const intervalId = setInterval(checkSession, 1000 * 60 * 2);

//     return () => {
//       clearInterval(intervalId);
//     };
//   }, []);
 
// };

// export default useAuth;


 