# Sharebnb

[Sharebnb live](https://sharebnb-aa.herokuapp.com/)

Sharebnb is a web application inspired by Airbnb. It utilizes Ruby on Rails, a PostgreSQL database, and React.js with Redux as its frontend architectural framework.

## Features & Implementation

### Destinations

The database stores information for several different cities, referred to as destinations. One can determine the name of the city that a spot is in, by checking the ```destination_id```. The main page of Sharebnb shows a collection of the destinations, which users can click on to access the search.

### Search

Each page includes the navigation bar, which redirects users to the search page. Here, they can view all of the spots, filtered by the bounds of the map and by price. User search information is maintained through the FiltersReducer which updates ```filters``` portion of the store's state whenever a user makes a change to the search (such as when typing in the navigation bar). The search page design was inspired by Airbnb's clean design.

![image of spots search](docs/wireframes/search-page.png)

Much of the search page is taken up by the map, created with the Google Maps API. The rest of the page includes the spots (bookable homes) index. Users are able to click on spots to view their pages. As users move around the map and change the price filter, the spots index changes to show only the searched for spots.

It was challenging to determine the best way to search based on location. Initially I had planned on keeping track of the ```destination_id``` for spots in order to search efficiently. While I was planning the search feature out in more detail, I realized that due to the implementation of a map, this may not be necessary. I was able to keep track of the letters users search for in the navigation bar, which in turn adjusts the map. The spots index is further narrowed down based on the positioning of the map.

### Spots

Spots refers to all of the homes in the database that users have created, which other users may book. In the database, spots are stored in a table, which contains columns for ```title```, ```description```, ```price```, ```image_url```, ```destination_id```, ```host_id```, ```lat``` (latitude), and ```lng``` (longitude).

Users are able to create new spots, which will then appear for all users on the search page. This page also includes a map, so that spots can be created dynamically, without users having to enter latitude and longitude information.

### Listings

As users create new spots, these spots are added to their Listings page (accessed by clicking ```Host``` in the navigation bar). Users can update and delete their listings on this page. These spots are also added to the general search, for other users to search through and book. Users can also access the page to create new listings on this page. Backend associations are made to keep track of which spots the current user has made.

![image of listings page](docs/wireframes/listings.png)

### Bookings

Bookings are kept track of in the database through a trips table, including columns for ```user_id```, ```spot_id```, ```check_in```, ```check_out```, and ```num_guests```. Backend associations are made to keep track all of a user's trips. Users may view these bookings by clicking on Trips in the navigation bar. Here, they are able to delete any of their bookings.

## 
## Future Directions

I plan on continuing work on this project. Below is an outline of the features I plan on implementing.

### Reviews

Reviews are great because you can see how people felt about the home where they previously stayed. I plan on implementing reviews which can be seen on a spot show page.

### User profiles

User profiles are important on Airbnb, with the purpose of viewing each other's information once users are sharing/staying at a home.

### Experiences

Experiences are a newer feature on Airbnb, but it would be a whole new user experience to have experiences as a feature. Experiences are similar to spots, but they are events that users are able to book, instead of homes.

### Wish List

Wish lists would be a collection of a user's favourite homes that they think they may be interested in booking now or in the future.

### Messaging

Messaging between users is an integral feature of Airbnb. It makes bookings a lot more dynamic. Adding a messaging feature would mean that users would be able to send a message to another user.
