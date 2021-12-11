import React from 'react'; 
import { CssBaseline, Grid } from '@material-ui/core';

import Navbar from './components/navbar/navbar'
import List from './components/list/list'
import Details from './components/details/details'

const App = () => {
    return(
        <div>
            <CssBaseline/>
            <Navbar/>
            <Grid container spacing={3} style={{ width: '100%'}}>
                <Grid item xs={12} md={4}>
                    <Details/>
                </Grid>
                <Grid item xs={12} md={8}>
                    <List/>    
                </Grid>
            </Grid>
        </div>
    )
}

export default App;