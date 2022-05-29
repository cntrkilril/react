import React from 'react'
import LoaderDogIcon from "./LoaderDogIcon";
import LoaderCatIcon from "./LoaderCatIcon";

function Loader() {
    return (
        <div className="Loader">
            <LoaderCatIcon />
            <LoaderDogIcon />
        </div>
    )
}

export default Loader