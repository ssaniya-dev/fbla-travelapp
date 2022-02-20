Importing
Before running this program, one would have to install the Material UI Library. This can be installed through the following command: 
npm install @mui/material @emotion/react @emotion/styled

To run the app through terminal, you must run: 
npm start 

or you can simply visit the website through the github. 

Now that all the information is loaded, you can start using the application. 

Application Information
Upon startup, the user will be greeted with a screen that displays locations in Ellicott City. With the filters on the left, the user will be able to filter through various variables such as the type, price, awards, availability, and rating to find the perfect travel location for them. Please note that upon switching between types of locations, there may be a delay. When the user finds the location they are looking for, there will be a card that displays detailed information about hte location such as the website and address. 


Advanced Features 
The API that powers this application is in real-time, and can be altered to show attractions/restaurants based on your own location. Simply use the TravelAdisor website to find the geo-location id of the location you are interested in and copy and paste this id into the location_id variable at src/api_src/index