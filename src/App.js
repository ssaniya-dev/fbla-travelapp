import React, {useState, useEffect} from 'react'; 
import { CssBaseline, Grid } from '@material-ui/core';
import Navbar from './components/navbar/navbar'
import List from './components/list/list'
import Details from './components/details/details'
import {getPlacesData} from './api_src'
const App = () => {
    //These are all the variables that will be populated in list.jsx. It will be used to filter the array of places.
    const [type, setType] = useState('restaurants');
    const [rating, setRating] = useState('');
    const [award, setAward] = useState('');
    const [price, setPrice] = useState('')
    const [available, setAvailable] = useState('')
    const [filteredPlaces, setFilteredPlaces] = useState([]);
    const[places, setPlaces] = useState([])
    //Filters through places array and returns the filtered array depending on the type (restaurant or attraction)
    useEffect(() => {
        getPlacesData(type)
            .then((data) => {
                setPlaces(data.filter((place) => place.name && place.num_reviews > 0));
                console.log(data)
                setFilteredPlaces([]);
                setPlaces(data)
            })
    }, [type])
    // Check the length of filteredPlaces b/c to save the user steps, we need to filter from the filteredPlaces array
    // instead of the regular places array. If the filteredPlaces array is empty, we filter through the original places 
    // array and set it to filteredPlaces

    //Filters through the places array and returns the filtered array with the given rating. 
    useEffect(() => {
        if(filteredPlaces.length === 0) {
            console.log('hi')
            const filtPlace= places.filter((place) => place.rating >= rating) 
            setFilteredPlaces(filtPlace)
        } else {
            const filtPlace = filteredPlaces.filter((place) => place.rating >= rating) 
            setFilteredPlaces(filtPlace)
        }
        // const filteredPlaces = places.filter((place) => Number(place.rating) > rating)
        // setFilteredPlaces(filteredPlaces)
    }, [rating])
    //Filters through the places array and returns the filtered array with the given availability. 
    useEffect(() => {
        if(filteredPlaces.length === 0) {
            const filtPlace= places.filter((place) => String(place.is_closed) == available) 
            setFilteredPlaces(filtPlace)
        } else {
            const filtPlace = filteredPlaces.filter((place) => String(place.is_closed) == available) 
            setFilteredPlaces(filtPlace)
        }
    }, [available])
    //Filters through the places array and returns the filtered array considering the given award
    useEffect(() => {
        if(filteredPlaces.length === 0) {
            const filtPlace = places.filter((place) => place?.awards?.length > award) 
            setFilteredPlaces(filtPlace)
        } else {
            const filtPlace = filteredPlaces.filter((place) => place?.awards?.length > award) 
            setFilteredPlaces(filtPlace)
        }
        // const filteredPlaces = places.filter((place) => place?.awards?.length > award)
        // setFilteredPlaces(filteredPlaces)
    }, [award])
    //Filters through the places array and returns the filtered array considering the given price
    useEffect(() => {
        if(filteredPlaces.length === 0) {
            if (price == "1") {
                const filtPlace = places.filter((place) => (place.price_level == "$" || place.price_level == "$$ - $$$"))
                setFilteredPlaces(filtPlace)
            } else if (price == "2") { 
                const filtPlace = places.filter((place) => (place.price_level == "$$$$" || place.price_level == "$$$$$"))
                setFilteredPlaces(filtPlace)
            } else {
                setFilteredPlaces(places)
            }
        } else {
            if (price == "1") {
                const filtPlace = filteredPlaces.filter((place) => (place.price_level == "$" || place.price_level == "$$ - $$$"))
                setFilteredPlaces(filtPlace)
            } else if (price == "2") { 
                const filtPlace = filteredPlaces.filter((place) => (place.price_level == "$$$$" || place.price_level == "$$$$$"))
                setFilteredPlaces(filtPlace)
            } else {
                setFilteredPlaces(places)
            }
        }


    }, [price])

    //This displays all the components of the application
    return(
        <div>
            <CssBaseline/>
            <Navbar/>
            <Grid container spacing={3} style={{ width: '100%', color: '#3a3153'}}>
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