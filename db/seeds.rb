#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Destination.delete_all
User.delete_all
Spot.delete_all

user1 = User.create!(
  username: "aliciacodes",
  first_name: "Alicia",
  password: "codingissupercool",
  image_url: "http://res.cloudinary.com/sharebnb/image/upload/v1489784361/marion-michele-66097_ncghwp.jpg",
)

user2 = User.create!(
  username: "pibble46",
  first_name: "Frances",
  password: Faker::Internet.password,
  image_url: "https://res.cloudinary.com/sharebnb/image/upload/v1489879063/christopher-ayme-157131-dog_hgko2i.jpg"
)

user3 = User.create!(
  username: "kayhermiston",
  first_name: "Kay",
  password: Faker::Internet.password,
  image_url: "http://res.cloudinary.com/sharebnb/image/upload/v1489876140/alex-harvey-34864-woman_kqybyx.jpg"
)

user4 = User.create!(
  username: "orval.h.hoeger",
  first_name: "Orval",
  password: Faker::Internet.password,
  image_url: "https://res.cloudinary.com/sharebnb/image/upload/v1489878941/allef-vinicius-147930-man_guyxia.jpg"
)

user5 = User.create!(
  username: "musicisfun53",
  first_name: "Monica",
  password: Faker::Internet.password,
  image_url: "https://res.cloudinary.com/sharebnb/image/upload/v1489878731/alexander-dummer-150646-family_vilub7.jpg"
)

user6 = User.create!(
  username: "coolcoder74",
  first_name: "Zackery",
  password: Faker::Internet.password,
  image_url: "https://res.cloudinary.com/sharebnb/image/upload/v1489878789/chelsea-ferenando-190941-man_eg22ds.jpg"
)

user7 = User.create!(
  username: "codingforfun34",
  first_name: "Ivy",
  password: Faker::Internet.password,
  image_url: "https://res.cloudinary.com/sharebnb/image/upload/v1489878858/allef-vinicius-152932-woman_ydsxll.jpg"
)

user8 = User.create!(
  username: "luv2travel22",
  first_name: "Cyril",
  password: Faker::Internet.password,
  image_url: "https://res.cloudinary.com/sharebnb/image/upload/v1489878665/clem-onojeghuo-151794-man_bthftr.jpg"
)

user9 = User.create!(
  username: "rubieloveskittens",
  first_name: "Rubie",
  password: Faker::Internet.password,
  image_url: "https://res.cloudinary.com/sharebnb/image/upload/v1489878556/dariusz-sankowski-46480-cat_bxlqai.jpg"
)

user10 = User.create!(
  username: "travels4sean",
  first_name: "Sean",
  password: Faker::Internet.password,
  image_url: "http://res.cloudinary.com/sharebnb/image/upload/v1489876794/fritz-walter-152075-man_byvsql.jpg"
)

user11 = User.create!(
  username: "mara.leannon",
  first_name: "Mara",
  password: Faker::Internet.password,
  image_url: "http://res.cloudinary.com/sharebnb/image/upload/v1489876822/eli-defaria-14556-woman_mtzakc.jpg"
)

user12 = User.create!(
  username: "worldtraveler28",
  first_name: "Boyd",
  password: "C4BtZbPzQ4NoZkX6",
  image_url: "http://res.cloudinary.com/sharebnb/image/upload/v1489876731/juil-yoon-155233-man_i3siec.jpg"
)

user13 = User.create!(
  username: "adventurewithpuppies",
  first_name: "Misael",
  password: "RlS43t0bE4",
  image_url: "http://res.cloudinary.com/sharebnb/image/upload/v1489876758/jez-timms-50295-dog_loxq5g.jpg"
)

user14 = User.create!(
  username: "football4life",
  first_name: "Clement",
  password: Faker::Internet.password,
  image_url: "http://res.cloudinary.com/sharebnb/image/upload/v1489876626/keith-johnston-216347-man_ctvtib.jpg"
)

user15 = User.create!(
  username: "delilah.jakubowski",
  first_name: "Delilah",
  password: Faker::Internet.password,
  image_url: "http://res.cloudinary.com/sharebnb/image/upload/v1489876651/cristian-newman-153712-woman_k7uslq.jpg"
)

user16 = User.create!(
  username: "emmitt.reichert",
  first_name: "Emmitt",
  password: Faker::Internet.password,
  image_url: "http://res.cloudinary.com/sharebnb/image/upload/v1489876680/kahar-saidyhalam-159353-man_kerqzc.jpg"
)

user17 = User.create!(
  username: "worldtraveler29",
  first_name: "Elias",
  password: Faker::Internet.password,
  image_url: "http://res.cloudinary.com/sharebnb/image/upload/v1489876700/jean-gerber-36509-man_dbdi7v.jpg"
)

user18 = User.create!(
  username: "photosoftheworld",
  first_name: "Monte",
  password: Faker::Internet.password,
  image_url: "http://res.cloudinary.com/sharebnb/image/upload/v1489876588/lesly-b-juarez-220440-man_cujtga.jpg"
)

user19 = User.create!(
  username: "lisette.bauch",
  first_name: "Lisette",
  password: Faker::Internet.password,
  image_url: "http://res.cloudinary.com/sharebnb/image/upload/v1489876557/lau-keith-146366-woman_vvhnfp.jpg"
)

user20 = User.create!(
  username: "yoga4life",
  first_name: "Laverne",
  password: Faker::Internet.password,
  image_url: "http://res.cloudinary.com/sharebnb/image/upload/v1489876526/marion-michele-191320-woman_vmmccq.jpg"
)

user21 = User.create!(
  username: "trishatravels91",
  first_name: "Trisha",
  password: "QrZp0mDj1sLwLw",
  image_url: "http://res.cloudinary.com/sharebnb/image/upload/v1489876399/freestocks-org-147688-woman_pwn9ew.jpg"
)

user22 = User.create!(
  username: "sunshineflowers",
  first_name: "Herta",
  password: "DqTd8h7qP4",
  image_url: "http://res.cloudinary.com/sharebnb/image/upload/v1489876432/tim-mossholder-155004-woman_ognzfy.jpg"
)

user23 = User.create!(
  username: "luv4nature",
  first_name: "Rodrigo",
  password: Faker::Internet.password,
  image_url: "http://res.cloudinary.com/sharebnb/image/upload/v1489876466/peter-hershey-112798-man_o2wc2l.jpg"
)

user24 = User.create!(
  username: "masterchefmaureen",
  first_name: "Maureen",
  password: Faker::Internet.password,
  image_url: "http://res.cloudinary.com/sharebnb/image/upload/v1489876498/william-stitt-162611-woman_xllngf.jpg"
)

destination1 = Destination.create!(
  city: "San Francisco",
  image_url: "http://res.cloudinary.com/sharebnb/image/upload/q_59/v1489777250/andrew-ruiz-sf-horizontal_fdvnpl.jpg",
  lat: 37.792081,
  lng: -122.419413
)

destination2 = Destination.create!(
  city: "Boston",
  image_url: "http://res.cloudinary.com/sharebnb/image/upload/q_56/v1489776355/boston_back_bay_horizontal_wbxzij.jpg",
  lat: 42.357004,
  lng: -71.062309
)

destination3 = Destination.create!(
  city: "New York",
  image_url: "http://res.cloudinary.com/sharebnb/image/upload/q_70/v1489778201/philipp-henzler-nyc-horizontal_ujgwcr.jpg",
  lat: 40.777878,
  lng: -73.937499
)

destination4 = Destination.create!(
  city: "Seattle",
  image_url: "http://res.cloudinary.com/sharebnb/image/upload/v1489776342/seattle-horizontal_oaldvs.jpg",
  lat: 47.598559,
  lng: -122.326300
)

destination5 = Destination.create!(
  city: "Chicago",
  image_url: "http://res.cloudinary.com/sharebnb/image/upload/q_64/v1489778951/oxecvx6ql3epkhjtm7qo.jpg",
  lat: 41.883979,
  lng: -87.634669
)

destination6 = Destination.create!(
  city: "Detroit",
  image_url: "http://res.cloudinary.com/sharebnb/image/upload/q_59/v1489778695/doug-zuba-92979_uepk4f.jpg",
  lat: 42.336985,
  lng: -83.054480
)

spot1 = Spot.create!(
  title: "Tent under the stars!",
  destination_id: destination1.id,
  price: 113,
  image_url: "https://res.cloudinary.com/sharebnb/image/upload/q_28/v1489879217/sayan-nath-165552-san-francisco_uiourb.jpg",
  host_id: user2.id,
  description: "Spend a night under the stars in a tent. You'll feel close to nature! It is an incredible
                location to go camping. We will provide this tent to you and can put it together for an
                additional cost. It fits three people, easily. We know you'll love this location! It's only
                an hour from San Francisco, but you can still see the stars. We'll include a few towels, lamps
                and sleeping bags as requested.",
  lat: 37.835816,
  lng: -122.490760
)

spot2 = Spot.create!(
  title: "Beautiful villa with a pool",
  destination_id: destination1.id,
  price: 347,
  image_url: "http://res.cloudinary.com/sharebnb/image/upload/v1489879215/vita-vilcina-3217-san-francisco_sshrfn.jpg",
  host_id: user3.id,
  description: "Stay with us in the beautiful Presidio Heights of San Francisco. This home can fit up to 10
                people quite comfortably. You will enjoy our beautiful, heated pool. There is a beautiful kitchen
                and a spacious living room. This is not a shared space, so you will have a private space of your own
                to enjoy. The outdoor space includes several patio chairs and a grill. There are many sites nearby,
                such as the Presidio Golf Course, Golden Gate Park, Golden Gate Bridge, the Lyon Street Steps, and
                the Palace of Fine Arts.",
  lat: 37.790091,
  lng: -122.453583
)

spot3 = Spot.create!(
  title: "View of Lombard Street in the heart of San Francisco",
  destination_id: destination1.id,
  price: 139,
  image_url: "http://res.cloudinary.com/sharebnb/image/upload/v1489879213/pedro-lastra-167351-san-francisco_dwcrmf.jpg",
  host_id: user1.id,
  description: "You will be conveniently located in the heart of San Fransisco, with a view of Lombard Street,
                and easy access to Fisherman's Wharf, Ghirardelli Square, Coit Tower,  and Chinatown. We will
                provide you a queen size bed, in a private room. You will be able to meet other guests in the
                shared living spaces. We would be happy to give you advice for what to enjoy while visiting the
                city! You will not run out of things to do! We hope to see you soon!",
  lat: 37.803130,
  lng:-122.416458
)

spot4 = Spot.create!(
  title: "Stunning views of the entire city at the top of Nob Hill",
  destination_id: destination1.id,
  price: 137,
  image_url: "http://res.cloudinary.com/sharebnb/image/upload/v1489879211/rezaul-karim-124516-san-francisco_etcx47.jpg",
  host_id: user1.id,
  description: "Nob Hill will provide a lot of nightlife, great restaurants, and wonderful views of the city. To
                the north you will see the bay, and to the west you have a great view of the Bay Bridge. Walking up
                Nob Hill is not for the faint of heart! There is easy access to this apartment from the cable cars,
                which cost only $7 for a ride. This is a must do! You will have a private room will a full sized
                bed. You'll share the bathroom, living room, and kitchen with us! We would love to meet you and give
                you advice on what to see around the city! We are right near the heart of Chinatown, and only a 5
                minute walk away from Union Square. Only a short walk from the Embarcadero as well, which also has
                fantastic restaurants. Centrally located, you will have an easy time getting around to any other
                part of the city.",
  lat: 37.791929,
  lng: -122.409278
)

spot5 = Spot.create!(
  title: "Relaxing porch space near the heart of the mission",
  destination_id: destination1.id,
  price: 39,
  image_url: "http://res.cloudinary.com/sharebnb/image/upload/v1489879211/mad-house-37992-san-francisco_ov2hx3.jpg",
  host_id: user4.id,
  description: "We provide you a very comfortable couch on the porch. There is great weather here, so you'll
                enjoy! There is great food in the mission that you can't miss! You will have full access to the
                rest of our apartment. We provide bagels and coffee each morning for your comfort! You'll love
                this area! Public transportation is very accessible, so you will be able to get around the city
                very easily.",
  lat: 37.766244,
  lng: -122.411703
)

spot6 = Spot.create!(
  title: "Great view and spacious room near Twin Peaks",
  destination_id: destination1.id,
  price: 136,
  image_url: "http://res.cloudinary.com/sharebnb/image/upload/v1489879208/kevin-fernandez-37634-san-francisco_xfcszn.jpg",
  host_id: user1.id,
  description: "You will have full access to a kitchen and living room, which you will be sharing with other
                guests. You'll have your own room, which is quite spacious. There is a couch to sleep on, and
                a balcony where you can enjoy a view of Twin Peaks. It's nice to get a little bit of nature in
                the middle of the city! It is only an 18 minute walk from public transportation, and from there
                you can get anywhere in the city. We are pet friendly! We'd love for you to enjoy your stay here
                with your pets! Please understand that other guests may have pets here before choosing this
                location. We do not live here, but respond quickly to messages and are close by in case you need
                help with anything. We'd love to give you advice for visiting the city. Twin Peaks is a great place
                to visit, and you are also close to the 16th Avenue Tiled Steps, Golden Gate Park, The Castro, and
                The Mission. We hope you have a great stay!",
  lat: 37.753114,
  lng: -122.441517
)

spot7 = Spot.create!(
  title: "Private trailer for camping near the ocean",
  destination_id: destination1.id,
  price: 195,
  image_url: "http://res.cloudinary.com/sharebnb/image/upload/v1489879203/eugene-quek-111785-san-francisco_j1i4tu.jpg",
  host_id: user5.id,
  description: "There is a small kitchen for your use. This space will be private for you. We provide, towels,
                blankets, and other important necessities. We can provide more information if requested. This
                is a great outdoor space to stay if you're tired of being in the city! There are many lovely
                views near this area, and great hikes close by. It will only be a half an hour drive back to the
                heart of San Francisco. There are great views of the Golden Gate Bridge in this area! We hope
                you have a great stay!",
  lat: 37.823686,
  lng: -122.530372
)

spot8 = Spot.create!(
  title: "Beautiful view of the Golden Gate Bridge",
  destination_id: destination1.id,
  price: 145,
  image_url: "http://res.cloudinary.com/sharebnb/image/upload/v1489879206/joseph-barrientos-17377-san-francisco_hu5lgj.jpg",
  host_id: user5.id,
  description: "Enjoy your stay near the Coastal Trail, with a great view of the Golden Gate Bridge! This will be
                a lovely camping experience, and you'll still be quite close to the city. We'd love to have you.
                We will provide a tent, but everything else will need to be provided by you. We'd be happy to give
                you advice of what to do and see in this area.",
  lat: 37.828822,
  lng: -122.516011
)

spot9 = Spot.create!(
  title: "Stay in a San Francisco Painted Lady home!",
  destination_id: destination1.id,
  price: 226,
  image_url: "http://res.cloudinary.com/sharebnb/image/upload/v1489879204/jakob-owens-127176-san-francisco_ya5smu.jpg",
  host_id: user6.id,
  description: "The painted ladies are more beautiful in person than can be seen in a photo. This is quite
                a unique experience! We'd love to have you! You'll be staying in our extra bedroom, with your
                own bathroom. Please feel free to enjoy our other living spaces, including the kitchen. Travel
                books are provided in your room. Nearby locations include Alamo Square Park, Golden Gate Park,
                Japanese Tea Garden, Japantown, Haight-Ashbury. It is very easy to get around from this location
                whether you use public transportation or taxi services. We hope you have a great stay! Long term
                stays are welcome.",
  lat: 37.778129,
  lng: -122.435527
)
