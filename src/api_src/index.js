import axios from "axios";

export const getPlacesData = async(type) => {
    try {
        const {data: {data}} = await axios.get(`https://travel-advisor.p.rapidapi.com/restaurants/list`, {
              params: {
                location_id: '293919',
                restaurant_tagcategory: '10591',
                restaurant_tagcategory_standalone: '10591',
                lunit: 'km',
                limit: '30',
                open_now: 'false',
                lang: 'en_US'
              },
              headers: {
                'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
                'x-rapidapi-key': 'f92a96c452mshf765c45ffec9e86p13d8c8jsn705c0cb416d7'
              }
            })
        return data
    } catch (error) {
        console.log(error)
    }
}