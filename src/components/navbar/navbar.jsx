import {Autocomplete} from '@react-google-maps/api'
import {AppBar, Toolbar, Typography, Button} from '@material-ui/core'
import React from 'react'

import useStyles from './styles';
const Navbar = () => {
    const classes = useStyles();
    return(
        <AppBar position = "static" style={{ background: '#424242' }}>
            <Toolbar className = {classes.toolbar}>
                <Typography variant ="h5" className = {classes.title}>
                    TravelBeast
                </Typography>
            </Toolbar>

        </AppBar>
    )
}

export default Navbar