import React from "react";
import {Header} from "../components";
import {Outlet} from "react-router-dom";


const ComponentWithHeader = () => {
    return (
        <>
            <Header/>
            <Outlet/>
        </>
    );
};

export default ComponentWithHeader;
