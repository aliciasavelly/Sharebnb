```javascript

{
  currentUser: {
    id: 1,
    username: "app-academy",
    first_name: "Alicia",
    image_url: "cloudinary.jpg"
  },
  errors: [],
  trips: {
    1: {
      spot_id: 1,
      spot: spot_object,
      user_id: 1,
      status: "upcoming",
      check_in: "01/23/2017",
      check_out: "01/27/2017",
      num_guests: 2
    }
  },
  spots: {
    1: {
      title: "Spacious home in the mission",
      destination_id: 1,
      price: 123,
      image_url: "cloudinary.jpg",
      lat: 42.336985,
      lng: -83.054480
    }
  },
  spotDetail: {
    id: 1,
    host_id: 1,
    description: "There's a lot to do here.",
    reviews: {
      1: {
        user_id: 2,
        detail: "This is a great place to stay",
        date: "March 2017"
      }
    }
  },
  destinations: {
    1: {
      city: "San Francisco",
      state: "California",
      country: "United States of America",
      image_url "sf.jpg",
      lat: 37.792081,
      lng: -122.419413
    },
    2: {
      city: "New York City",
      state: "New York",
      country: "United States of America",
      image_url "nyc.jpg"
    },
    3: {
      city: "Boston",
      state: "Massachusetts",
      country: "United States of America",
      image_url "bos.jpg"
    }
  },
  searchFilters: {
    destination: "San Francisco",
    price_low: 30,
    price_high: 120,
    check_in: "01/23/2017",
    check_out: "01/27/2017"
  }
}

```
