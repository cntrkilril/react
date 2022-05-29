import {Button, Container, Grid, Typography} from '@mui/material'
import React from 'react'
import {Link} from 'react-router-dom'

function BeginPage() {
    return (
        <Container sx={{width: '360px', paddingTop: 13}}>
            <Grid container direction='column' rowSpacing={3}>
                <Grid item>
                    <img src='../static/Image.png' alt="пёсик"/>
                </Grid>
                <Grid item>
                    <Typography align='center'>
                        Найди себе четвероногого друга из приюта!
                    </Typography>
                </Grid>
                <Grid item>
                    <Link to="/type"><Button sx={{width: '100%'}}>Выбрать предпочтения</Button></Link>
                </Grid>
            </Grid>
        </Container>
    )
}

export default BeginPage