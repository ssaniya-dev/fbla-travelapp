import React, {useState} from 'react'
import useStyles from './styles.js';
import {Grid, Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip} from '@material-ui/core'
import Rating from '@material-ui/lab/Rating'
const Details = ({places, selected, refProp}) => {
    const classes = useStyles()  
    if (selected) refProp?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    console.log(places)
    return(
    <Grid container spacing={2} className={classes.list}>
        {places?.map((place, i) => (

            <Grid item key={i} xs={4}>
            <Card elevation={6} style = {{height: 800, color: "white", backgroundColor: "#424242", fontFamily:"fantasy"}}>
                <CardMedia
                    style={{ height: 350 }}
                    image={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
                    title={place.name}
                />
                <CardContent style = {{fontFamily:"fantasy"}}>
                    <Typography gutterBottom variant="h5">{place.name ? place.name : "Coming soon..."}</Typography>
                    <Box display="flex" justifyContent="space-between" my={2}>
                    <Rating name="read-only" value={Number(place.rating)} readOnly />
                    <Typography component="legend">{place.num_reviews ? place.num_reviews : "No"} review{place.num_reviews > 1 && 's'}</Typography>
                    </Box>
                    {place?.cuisine?.map(({ name }) => (
                    <Chip key={name} size="small" label={name} className={classes.cusine} />
                    ))}
                    {place.address && (
                    <Typography gutterBottom variant="body2" color="white" className={classes.subtitle}>
                        {place.address}
                    </Typography>
                    )}
                    {place.phone && (
                    <Typography variant="body2" color="white" className={classes.spacing}>
                        {place.phone}
                    </Typography>
                    )}
                </CardContent>
                <CardActions>
                    <Button size="small" color="white" onClick={() => window.open(place.website, '_blank')}>
                    Website
                    </Button>
                </CardActions>
                </Card>
            </Grid>
        ))}
    </Grid>
    )
}

export default Details