import {Button, Container, Grid, Typography} from '@mui/material'
import React from 'react'
import {Loader} from '../components'

function LoadPage() {
    return (
        <Container sx={{width: '360px', paddingTop: 30}}>
            <Grid container direction='column' rowSpacing={10}>
                <Grid item>
                    <Typography align='center'>
                        Find Friends
                    </Typography>
                </Grid>
                <Grid item container justifyContent='center'>
                    <Loader/>
                </Grid>
                <Grid item>
                    <Typography align='center'>
                        Ищем друзей
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    )
}

export default LoadPage