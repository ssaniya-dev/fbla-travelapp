import {AppBar, Toolbar, Box, Popper, Typography} from '@material-ui/core'
import React from 'react'

import useStyles from './styles';

const Navbar = () => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;
    return(
        <AppBar position = "static" style={{ background: '#424242' }}>
            <Toolbar className = {classes.toolbar}>
                <Typography variant ="h5" className = {classes.title}>
                    TravelBeast
                </Typography>
                <button aria-describedby={id} type="button" onClick={handleClick}>
                    Help
                </button>
                <Popper id={id} open={open} anchorEl={anchorEl}>
                    <Box sx={{ border: 1, p: 1, bgcolor: 'black', color:"white" }}>
                    Welcome to TravelBeast, your brand new travel assistant! 
                    You can choose between restaurants or attractions on the left menu.
                     From there, you can specify what types of attractions/restaurants you want to see 
                     based on price point, rating, awards, and more! All the available attractions are 
                     listed on the right of your screen. 
                    </Box>
                </Popper>
            </Toolbar>

        </AppBar>
    )
}

export default Navbar