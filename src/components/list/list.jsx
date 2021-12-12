import React, {useState} from 'react'
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core'
import Details from '../details/details'

import useStyles from './styles'
const List = ({}) => {
    const classes = useStyles()
    const [type, setType] = useState('attractions')
    const [rating, setRating] = useState(0)
    
    return(
        <div className = {classes.container}>
            <Typography variant = "h4">Filter Results:</Typography>
            <FormControl className={classes.formControl}>
                <InputLabel>Type</InputLabel>
                <Select value = {type} onChange = {(e)=> setType(e.target.value)}>
                    <MenuItem value = "attractions">Attractions</MenuItem>
                    <MenuItem value = "hotels">Hotels</MenuItem>
                    <MenuItem value = "restaurants">Restaurants</MenuItem>
                </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel>Rating</InputLabel>
                <Select value = {rating} onChange = {(e)=> setRating(e.target.value)}>
                    <MenuItem value = {0}>All</MenuItem>
                    <MenuItem value = {3}>3+ Stars</MenuItem>
                    <MenuItem value = {4}>4+ Stars</MenuItem>
                </Select>
            </FormControl>

        </div>
    )
}

export default List