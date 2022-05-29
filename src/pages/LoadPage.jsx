import {Container,} from '@mui/material'
import React from 'react'
import HeaderLoader from "../components/HeaderLoader";
import {Loader} from "../components";

function LoadPage() {
    return (
        <Container sx={{width: '360px', display: "flex", flexDirection: "column", justifyContent: 'center', alignItems: 'center'}}>
            <HeaderLoader paddingTop={'80px'}/>
            <Loader />
        </Container>
    )
}

export default LoadPage