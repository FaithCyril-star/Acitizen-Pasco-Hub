import React from 'react'
import {Navigate, useLocation} from "react-router-dom"

const ProtectedRoute = ({children}) => {
    // Retrieve the JSON string from local storage
    const userJSON = localStorage.getItem("user");

    // Convert the JSON string to an object
    const user = JSON.parse(userJSON);
    
    let location = useLocation();

    if(!user) {
        return <Navigate to="/login" state={{ from: location}} replace />
    }
 return children

};

export default ProtectedRoute;