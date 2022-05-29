import React from 'react';
import LogoLoader from "./LogoLoader";

const HeaderLoader = (props) => {
    return (
        <div style={{paddingTop: props.paddingTop}}>
            <LogoLoader/>
        </div>
    );
};

export default HeaderLoader;
