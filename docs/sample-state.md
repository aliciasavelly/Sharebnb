```javascript

{
  currentUser: {
    id: 1,
    username: "app-academy",
    first_name: "Alicia",
    last_name: "Savelly"
  },
  forms: {
    signUp: {errors: []},
    logIn: {errors: []},
    bookSpot: {errors: ["Each section must be filled out."]}
  },
  spots: {
    1: {
      title: "Spacious home in the mission",
      user_id: 1,
      destination_id: 1,
      price: 123,
      cleaning_fee: 44,
      check_in: "Anytime after 3pm",
      check_out: "12PM (noon)",
      pet_owner: "Some pets",
      property_type: "House",
      room_type: "Entire home/apt",
      house_rules: "Have fun!",
      description: "There's a lot to do here",
      reviews: {
        1: {
          user_id: 2,
          detail: "This is a great place to stay",
          date: "March 2017"
        }
      }
    }
  },
  trips: {
    1: {
      spot_id: 1,
      status: upcoming,
      user_id: 1,
      check_in: "01/23/2017",
      check_out: "01/27/2017",
      num_guests: 2
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
