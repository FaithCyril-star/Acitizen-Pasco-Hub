import React,{ createContext, useState} from 'react';
import axios from 'axios';

const CoursesContext = createContext();
   
export function CoursesProvider({children}){
    const [courses,SetCourses] = useState([]);


        axios.get(`http://localhost:9000/admin`)
        .then((response)=>{
            SetCourses(response.data);
        })
        .catch((err) => console.log(err))

    return (
        <CoursesContext.Provider value={{courses}}>{children}</CoursesContext.Provider>
    );
}

export default CoursesContext;
