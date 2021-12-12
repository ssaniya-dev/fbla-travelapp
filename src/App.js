import React, {useState, useEffect} from 'react'; 
import { CssBaseline, Grid } from '@material-ui/core';

import Navbar from './components/navbar/navbar'
import List from './components/list/list'
import Details from './components/details/details'
import {getPlacesData} from './api_src'
const App = () => {
    const[places, setPlaces] = useState([])
    useEffect(() => {
        getPlacesData()
            .then((data) => {
                console.log(data)
                setPlaces(data)
            })
    }, [])

    return(
        <div>
            <CssBaseline/>
            <Navbar/>
            <Grid container spacing={3} style={{ width: '100%'}}>
                <Grid item xs={12} md={4}>
                    <List 
                        places = {places}

                    />
                </Grid>
                <Grid item xs={12} md={8}>
                    <Details places = {places}/>    
                </Grid>
            </Grid>
        </div>
    )
}

export default App;