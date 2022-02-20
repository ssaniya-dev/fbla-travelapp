import {AppBar, Toolbar, Modal, Box, Typography, Button} from '@material-ui/core'
import React from 'react'
import useStyles from './styles';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#3a3153',
    border: '2px solid #000',
    color: 'white',
    boxShadow: 24,
    p: 4,
  };
const Navbar = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return(
        <AppBar position = "static" style={{ background: '#3a3153' }}>
            <Toolbar className = {classes.toolbar}>
                <Typography variant ="h5" className = {classes.title}>
                    TravelHaven
                </Typography>
                <Button variant="contained" type="button" onClick={handleOpen}>
                    Help
                </Button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                        What is the purpose of this application?
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        To help users find a tourist location based on a set of criteria! 
                        </Typography>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                        How do I use this application? 
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        You can choose between restaurants or attractions on the left menu. From there, you can specify what types of attractions/restaurants you want to see based on price point, rating, awards, and more! All the available attractions are listed on the right of your screen. 
                        </Typography>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                        How many attractions are there in this application? 
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        To help users find a tourist location based on a set of criteria! 
                        </Typography>
                    </Box>
                </Modal>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar