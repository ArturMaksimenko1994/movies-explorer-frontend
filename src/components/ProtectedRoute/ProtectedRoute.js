import React from "react";
import { Navigate } from "react-router-dom";
import Preloader from "../Preloader/Preloader";

// компонент HOC (от англ. higher-order component, «компонент более высокого порядка»)
// этот компонент принимает другой компонент в качестве пропса
// он также может взять неограниченное число пропсов и передать их новому компоненту

const ProtectedRoute = ({ component: Component, ...props }) => {
    return (

        props.loggedIn === undefined
            ? <Preloader isOpen={true} />
            : props.loggedIn === true ? <Component {...props} />
            : props.loggedIn === false && <Navigate to="/" />
    );
};

export default ProtectedRoute; 

