#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Destination.delete_all
User.delete_all

User.create!(
  username: "aliciacodes",
  first_name: "Alicia",
  password: "codingissupercool",
  image_url: "http://res.cloudinary.com/sharebnb/image/upload/v1489784361/marion-michele-66097_ncghwp.jpg",
)

Destination.create!(
  city: "San Francisco",
  image_url: "http://res.cloudinary.com/sharebnb/image/upload/q_59/v1489777250/andrew-ruiz-sf-horizontal_fdvnpl.jpg",
  lat: 37.792081,
  lng: -122.419413,
)

Destination.create!(
  city: "Boston",
  image_url: "http://res.cloudinary.com/sharebnb/image/upload/q_56/v1489776355/boston_back_bay_horizontal_wbxzij.jpg",
  lat: 42.357004,
  lng: -71.062309,
)

Destination.create!(
  city: "New York",
  image_url: "http://res.cloudinary.com/sharebnb/image/upload/q_70/v1489778201/philipp-henzler-nyc-horizontal_ujgwcr.jpg",
  lat: 40.777878,
  lng: -73.937499,
)

Destination.create!(
  city: "Seattle",
  image_url: "http://res.cloudinary.com/sharebnb/image/upload/v1489776342/seattle-horizontal_oaldvs.jpg",
  lat: 47.598559,
  lng: -122.326300,
)

Destination.create!(
  city: "Chicago",
  image_url: "http://res.cloudinary.com/sharebnb/image/upload/q_64/v1489778951/oxecvx6ql3epkhjtm7qo.jpg",
  lat: 41.883979,
  lng: -87.634669,
)

Destination.create!(
  city: "Detroit",
  image_url: "http://res.cloudinary.com/sharebnb/image/upload/q_59/v1489778695/doug-zuba-92979_uepk4f.jpg",
  lat: 42.336985,
  lng: -83.054480,
)
