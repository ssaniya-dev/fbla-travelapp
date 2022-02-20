import React from 'react'
import { Typography, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core'
import useStyles from './styles'
//holds all the variables that will be used to filter the list
const List = ({available, award, setAward, setAvailable, setType, type, setRating, rating, price, setPrice}) => {
    const classes = useStyles()
    return(
        <div className = {classes.container}>
            <Typography variant = "h4">Filter:</Typography>
            <FormControl className={classes.formControl}>
                <InputLabel id = "type">Type</InputLabel>
                {/* Extracts what location type the user wants the list to be filtered by. */}
                <Select value={type} onChange = {(e)=> setType(e.target.value)}>
                    <MenuItem value = "attractions">Attractions</MenuItem>
                    <MenuItem value = "restaurants">Restaurants</MenuItem>
                </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel>Price</InputLabel>
                {/* Extracts what price the user wants the list to be filtered by. */}
                <Select id = "price" value = {price} onChange = {(e)=> setPrice(e.target.value)}>
                    <MenuItem value = "0">All</MenuItem>
                    <MenuItem value = "1">Cheap</MenuItem>
                    <MenuItem value = "2">Expensive</MenuItem>
                </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel>Availability</InputLabel>
                {/* Extracts the availability the user wants the list to be filtered by. */}
                <Select id = "available" value = {available} onChange = {(e)=> setAvailable(e.target.value)}>
                    <MenuItem value = "0">All</MenuItem>
                    <MenuItem value = "false">Open</MenuItem>
                    <MenuItem value = "true">Closed</MenuItem>
                </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel>Awards</InputLabel>
                {/* Extracts the # of awards the user wants the list to be filtered by. */}
                <Select id = "award" value = {award} onChange = {(e)=> setAward(e.target.value)}>
                    <MenuItem value = "0">All</MenuItem>
                    <MenuItem value = "1">Awarded</MenuItem>
                    <MenuItem value = "5">Well Awarded</MenuItem>
                </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel>Rating</InputLabel>
                {/* Extracts the rating the user wants the list to be filtered by. */}
                <Select id = "rating" value = {rating} onChange = {(e)=> setRating(e.target.value)}>
                    <MenuItem value = "0">All</MenuItem>
                    <MenuItem value = "3">3+ Stars</MenuItem>
                    <MenuItem value = "4">4+ Stars</MenuItem>
                </Select>
            </FormControl>
        </div>
    )
}

export default List