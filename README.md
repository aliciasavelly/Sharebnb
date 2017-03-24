# Sharebnb

[Sharebnb live](https://sharebnb-aa.herokuapp.com/)

Sharebnb is a web application inspired by Airbnb. It utilizes Ruby on Rails, a PostgreSQL database, and React.js with Redux as its frontend architectural framework.

## Features & Implementation

### Destinations

The database stores information for several different cities, referred to as destinations. One can determine the name of the city that a spot is in, by checking the ```destination_id```. The main page of Sharebnb shows a collection of the destinations, which users can click on to access the search. The main page was inspired by Airbnb's clean design.

![image of main page](docs/wireframes/main.png)

### Spots

Spots references all of the homes in the database that users have created, which other users may book. In the database, spots are stored in a table, which contains columns for ```title```, ```description```, ```price```, ```image_url```, ```destination_id```, ```host_id```, ```lat``` (latitude), and ```lng``` (longitude).

### Search

### Bookings


<!-- ![image of notebook index](docs/wireframes/create-account.png) -->


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
