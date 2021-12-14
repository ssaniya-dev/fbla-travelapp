import React, {useState, useEffect} from 'react'; 
import { CssBaseline, Grid } from '@material-ui/core';

import Navbar from './components/navbar/navbar'
import List from './components/list/list'
import Details from './components/details/details'
import {getPlacesData} from './api_src'
const App = () => {
    const [type, setType] = useState('attractions');
    const [rating, setRating] = useState('');
    const [award, setAward] = useState('');
    const [price, setPrice] = useState('')
    const [available, setAvailable] = useState('')
    const [filteredPlaces, setFilteredPlaces] = useState([]);
    const[places, setPlaces] = useState([])
    useEffect(() => {
        getPlacesData(type)
            .then((data) => {
                setPlaces(data.filter((place) => place.name && place.num_reviews > 0));
                console.log(data)
                setFilteredPlaces([]);
                setPlaces(data)
            })
    }, [type])

    useEffect(() => {
        const filteredPlaces = places.filter((place) => Number(place.rating) > rating)
        setFilteredPlaces(filteredPlaces)
    }, [rating])

    useEffect(() => {
        const filteredPlaces = places.filter((place) => String(place.is_closed) == available)
        setFilteredPlaces(filteredPlaces)
    }, [available])

    useEffect(() => {
        const filteredPlaces = places.filter((place) => place?.awards?.length > award)
        setFilteredPlaces(filteredPlaces)
    }, [award])

    useEffect(() => {
        if (price == "1") {
            console.log('hi')
            const filteredPlaces = places.filter((place) => (place.price_level == "$" || place.price_level == "$$ - $$$"))
            setFilteredPlaces(filteredPlaces)
        } else if (price == "2") { 
            const filteredPlaces = places.filter((place) => (place.price_level == "$$$$" || place.price_level == "$$$$$"))
            setFilteredPlaces(filteredPlaces)
        } else {
            
        }

    }, [price])


    return(
        <div>
            <CssBaseline/>
            <Navbar/>
            <Grid container spacing={3} style={{ width: '100%'}}>
                <Grid item xs={12} md={4}>
                    <List 
                        type={type}
                        places={filteredPlaces.length ? filteredPlaces : places}
                        setType={setType}
                        rating = {rating}
                        setRating = {setRating}
                        price = {price}
                        setPrice = {setPrice}
                        available = {available}
                        setAvailable = {setAvailable}
                        award = {award}
                        setAward = {setAward}
                    />
                </Grid>
                <Grid item xs={12} md={8}>
                    <Details 
                        places={filteredPlaces.length ? filteredPlaces : places}
                        type={type}
                        rating = {rating}
                        setRating = {setRating}
                        setType={setType}
                        price = {price}
                        setPrice = {setPrice}
                        available = {available}
                        setAvailable = {setAvailable}
                        award = {award}
                        setAward = {setAward}
                        />    
                </Grid>
            </Grid>
        </div>
    )
}

export default App;