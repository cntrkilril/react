import {Button, Container, Grid, Typography} from '@mui/material'
import React from 'react'
import {Link} from 'react-router-dom'

function GenderFilter() {
    const data = {}
    return (
        <Container sx={{width: '360px', paddingTop: 30}}>
            <Grid container direction='column' rowSpacing={5}>
                <Grid item>
                    <Typography align='center'>
                        Выберите пол
                    </Typography>
                </Grid>
                <Grid item container direction='column' rowSpacing={1}>
                    <Button disabled={!data}>Мальчик</Button>
                    <Button disabled={!data}>Девочка</Button>
                    <Button disabled={!!data}>Любой</Button>
                </Grid>
                <Grid item container columnSpacing={1}>
                    <Grid item xs={6}>
                        <Link to="/type"><Button sx={{width: '100%'}}>Назад</Button></Link>
                    </Grid>
                    <Grid item xs={6}><Link to="/loadpage"><Button sx={{width: '100%'}}>Далее</Button></Link></Grid>
                </Grid>
            </Grid>
        </Container>
    )
}

export default GenderFilter