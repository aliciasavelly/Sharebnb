Destination.delete_all
User.delete_all
Spot.delete_all
Trip.delete_all

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

destination2 = Destination.create!(
  city: "Boston",
  image_url: "http://res.cloudinary.com/sharebnb/image/upload/q_56/v1489776355/boston_back_bay_horizontal_wbxzij.jpg",
  lat: 42.357004,
  lng: -71.062309
)

destination1 = Destination.create!(
city: "San Francisco",
image_url: "http://res.cloudinary.com/sharebnb/image/upload/q_59/v1489777250/andrew-ruiz-sf-horizontal_fdvnpl.jpg",
lat: 37.792081,
lng: -122.419413
)

destination3 = Destination.create!(
  city: "New York City",
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
  image_url: "http://res.cloudinary.com/sharebnb/image/upload/v1489879217/sayan-nath-165552-san-francisco_uiourb.jpg",
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

spot10 = Spot.create!(
  title: "Spacious, clean home a short walk to the ocean",
  destination_id: destination1.id,
  price: 212,
  image_url: "https://res.cloudinary.com/sharebnb/image/upload/v1490163953/rik-van-der-kroon-95384_pcxdf5.jpg",
  host_id: user6.id,
  description: "This space offers plenty of room, with three bedrooms, each with a queen bed. You won't be far
                from the ocean, where there is a lovely beach to enjoy. If you are interested in other suggestions
                of where to visit, we would be happy to help you with that. There are many sights to see in San
                Francisco. You will not run out of things to do! You can take the L into the city, or the 28 bus
                to the 38 bus into the city. It should take only 30 minutes to an hour. We look forward to seeing
                you! This is a private space, which you will not be sharing with other guests. We have a fully
                stocked kitchen for your use, as well as a living room and a family room. There is an additional
                pull out couch in the living room, which you are free to use. Please help yourself to the coffee
                we have supplied.",
  lat: 37.747402,
  lng: -122.484877
)

spot11 = Spot.create!(
  title: "Beautiful home with lemon trees in the mission",
  destination_id: destination1.id,
  price: 223,
  image_url: "https://res.cloudinary.com/sharebnb/image/upload/v1490163950/brooke-cagle-39569-san-francisco_pf38bk.jpg",
  host_id: user5.id,
  description: "The Mission offers an immense number of activities to enjoy in San Francisco. We have many
                suggestions! We'd love to help you out while you're in town! We live nearby so it'll be easy
                for us to help you out with that. We suggest eating out at some of the local restaurants,
                checking out Mission Dolores Park, and finding some murals (such as Balmy Alley). We have
                a few lemon trees that make great lemonade! Please enjoy! You'll have access to the full home
                including two bedrooms, with a full bed and a queen bed.",
  lat: 37.758284,
  lng: -122.416277
)

spot12 = Spot.create!(
  title: "Coder house near Embarcadero",
  destination_id: destination1.id,
  price: 32,
  image_url: "http://res.cloudinary.com/sharebnb/image/upload/v1490165498/beds-1132612_1280_gzqneh.jpg",
  host_id: user7.id,
  description: "Each room will be shared with up to 8 people. Many people who stay here are learning to code.
                We gladly welcome long-term stays, as many people are staying here while attending coding bootcamps.
                We provide bed sheets, but please bring your own towel. You can rent a towel from the front desk for
                $3. Please bring a lock so that you can store your items safely in the bins we have provided. We have
                several rooms, so if you would like a female-specific room, you can request this.",
  lat: 37.799733,
  lng: -122.404003
)

spot13 = Spot.create!(
  title: "Free breakfast at our lovely bed and breakfast",
  destination_id: destination1.id,
  price: 225,
  image_url: "https://res.cloudinary.com/sharebnb/image/upload/v1490163952/joseph-gonzalez-192345_zcsdmi.jpg",
  host_id: user7.id,
  description: "We're located in a great location, where you'll have an easy time getting anywhere in the city.
                We're near the bay, and Fisherman's Wharf. We offer a lovely selection of food for breakfast,
                all included in your price. We pride ourselves in the amazing talent of our chefs. We also offer
                other meals, which you can add to your package at an additional cost. Each room has its own,
                fun theme! The concierge will be available 24/7 to help you out with whatever you may need.
                We look forward to seeing you for your stay!",
  lat: 37.802785,
  lng: -122.412157
)

spot14 = Spot.create!(
  title: "Beautiful, spacious home in the Presidio",
  destination_id: destination1.id,
  price: 435,
  image_url: "https://res.cloudinary.com/sharebnb/image/upload/v1490163952/nico-beard-136417_qofsda.jpg",
  host_id: user3.id,
  description: "We welcome you into our spacious home, with space for up to 12 people. The space is beautiful; it
                is the perfect place to relax while you are on vacation. There is a heated pool in the back that
                you will be able to use. Golden Gate Park and Lands End are nearby. There are many places to enjoy
                in the Presidio. You will be only a short five minute drive to the Golden Gate Bridge, which is a
                must see. We will provide a full breakfast in the morning, with coffee.",
  lat: 37.787803,
  lng: -122.486420
)

spot15 = Spot.create!(
  title: "Okay-sized closet for one",
  destination_id: destination1.id,
  price: 27,
  image_url: "http://res.cloudinary.com/sharebnb/image/upload/q_60/v1489879203/hannah-morgan-39891-san-francisco_rxves2.jpg",
  host_id: user2.id,
  description: "My closet still has some clothing in it, but it also has a bed for you to use. You can feel free
                to join us in the kitchen/living room areas. The closet is really small, but we're also not
                charging much! We're sorry we don't have more space to share! We will have extra space in our
                other closet for your luggage. There's plenty to enjoy in the area so you don't have to spend
                your days in a closet! Hope to see you soon!",
  lat: 37.751260,
  lng: -122.480511
)

# spot16 = Spot.create!(
#   title:
#   destination_id: destination1.id,
#   price:
#   image_url:
#   host_id:
#   description:
#   lat:
#   lng:
# )
#
# spot17 = Spot.create!(
#   title:
#   destination_id: destination1.id,
#   price:
#   image_url:
#   host_id:
#   description:
#   lat:
#   lng:
# )
#
# spot18 = Spot.create!(
#   title:
#   destination_id: destination1.id,
#   price:
#   image_url:
#   host_id:
#   description:
#   lat:
#   lng:
# )
#
# spot19 = Spot.create!(
#   title:
#   destination_id: destination1.id,
#   price:
#   image_url:
#   host_id:
#   description:
#   lat:
#   lng:
# )
#
# spot20 = Spot.create!(
#   title:
#   destination_id: destination1.id,
#   price:
#   image_url:
#   host_id:
#   description:
#   lat:
#   lng:
# )

spot21 = Spot.create!(
  title: "Beautiful home near Millennium Park",
  destination_id: destination5.id,
  price: 111,
  image_url: "http://res.cloudinary.com/sharebnb/image/upload/q_54/v1490396046/christian-deknock-222409-chicago_tvqnf0.jpg",
  host_id: user8.id,
  description: "Chicago is an amazing city, and we look forward to hosting you here. We're very close to Millennium Park,
                which is beautiful during all seasons. You'll have your own private room and bathroom. Please feel free
                to share our kitchen with us. We'll provide coffee and a light breakfast each morning. We suggest that
                while you're in the city you don't forget to grab some Chicago style pizza, and check out the bean! We look
                forward to hosting you here. Please let us know if you have any questions. We will offer a discount if you
                stay for a month or longer.",
  lat: 41.883671,
  lng: -87.627358
)

spot22 = Spot.create!(
  title: "Sleep on our sailboat near the North End",
  destination_id: destination2.id,
  price: 114,
  image_url: "http://res.cloudinary.com/sharebnb/image/upload/q_62/v1489879199/bonnie-kittle-115760-boston_zz5ibf.jpg",
  host_id: user11.id,
  description: "It's quite the experience to spend a night on our small boat. You'll sleep under the stars. Hopefully
                you'll be able to stay warm! We'll provide several blankets, and other supplies! We look forward to
                your stay. Please come prepared to sail our boat without our assistance. Feel free to rent it out for
                the day even if you don't want to spend the night here. We keep her near the North End, and you'll be able
                to see the USS Constitution from here as well. We suggest that while you're here visiting the city, and
                while you're not on our sailboat, you visit Charlestown and the North End. These are beautiful parts of town
                that you will definitely enjoy. Don't forget to grab a cannoli! Please let us know if you have any questions
                that we can help you with.",
  lat: 42.370639,
  lng: -71.051413
)

spot23 = Spot.create!(
  title: "Cozy home near Detroit",
  destination_id: destination6.id,
  price: 112,
  image_url: "http://res.cloudinary.com/sharebnb/image/upload/q_60/v1489879217/wesley-tingey-182281-detroit_krljmb.jpg",
  host_id: user9.id,
  description: "We welcome you to our lovely home, especially cozy during the winter! You will have access
                to the full house, and will not be sharing your space with any other guests. There is a
                fireplace you may feel free to use. In the winter, we have plenty of blankets to help you
                stay warm. Within an hour drive, there are ski slopes to enjoy. We have a few sleds you
                can use as well! There are plenty of activities in the summer, too! There is a lake nearby
                which is super nice all year round. We would be happy to give you suggestions of what types
                of activities you can enjoy the area. We also urge you to take a drive into Detroit. There
                are great restaurants in the city, and local attractions! We will provide travel books, and
                are excited to speak to you in person about what we suggest as well. Welcome!",
  lat: 42.484168,
  lng: -82.946780
)

spot24 = Spot.create!(
  title: "Gorgeous castle in the country",
  destination_id: destination6.id,
  price: 758,
  image_url: "http://res.cloudinary.com/sharebnb/image/upload/q_61/v1489879213/rachel-davis-50329-detroit-neuschwanstein-castle-schwangau-germany_thvxd7.jpg",
  host_id: user14.id,
  description: "You'll be only a short 30 minute drive to Detroit, but you won't run out of places to explore
                in this amazing castle. It is an exact replica of the Neuschwanstein Castle in Germany. There
                are many guests staying in this castle, so we hope you meet plenty of new people from all over
                the world! There will be staff present at all times to help you with whatever is needed. Each
                room has two beds in it, and you can share a bathroom with a few other guests. Each room is a
                little different, so with each new stay you will have a different experience. This stay
                will be quite a unique one! There is a lot of nature to explore in the area. It is beautiful
                here all times of the year. We hope to see you soon!",
  lat: 42.485181,
  lng: -83.029178
)

spot25 = Spot.create!(
  title: "Shared apartment in the heart of Detroit",
  destination_id: destination6.id,
  price: 57,
  image_url: "http://res.cloudinary.com/sharebnb/image/upload/q_80/v1489879207/joshua-davis-172644-detroit_a3r0rp.jpg",
  host_id: user13.id,
  description: "It's easy to get around the city from our place. I live here with my wife. We are happy
                to share our space with you! You will have a full bed in your private room, and are
                welcome to share the rest of our place with us. We welcome long-term stays, but short-term
                is good too. We can give you plenty of suggestions on what to enjoy in the area. Hope to
                see you soon!",
  lat: 42.351357,
  lng: -83.078616
)

spot26 = Spot.create!(
  title: "Private room in our family home",
  destination_id: destination6.id,
  price: 67,
  image_url: "http://res.cloudinary.com/sharebnb/image/upload/q_41/v1489879206/flo-pappert-201009-detroit_erx3mx.jpg",
  host_id: user13.id,
  description: "We look forward to meeting you! We love to meet new people! I live here with my husband and
                our two children. We have a spare bedroom that you will be able to stay in, and your own
                restroom. There are plenty of places to visit in the area, and we're happy to give you
                plenty of suggestions. Our home is not accessible to any public transportation. Please
                let us know if you have any questions! We look forward to welcoming you into our home!",
  lat: 42.368608,
  lng: -83.150027
)

spot27 = Spot.create!(
  title: "Cabin at the lake",
  destination_id: destination6.id,
  price: 78,
  image_url: "http://res.cloudinary.com/sharebnb/image/upload/q_60/v1489879204/hannu-keski-hakuni-11194-detroit_wdqaui.jpg",
  host_id: user10.id,
  description: "This lake is great to enjoy! Our cabin is right on the lake, and we hope that you'll spend
                some time on the lake! We have a small boat that you may use. We welcome long-term stays, but short-term
                is good too. We can give you plenty of suggestions on what to enjoy in the area. Hope to
                see you soon! We look forward to meeting you! We love to meet new people! Please
                let us know if you have any questions! We look forward to welcoming you into our home! You'll have two
                beds here, so it's a perfect place to come with your familiy or a group of friends.",
  lat: 42.311221,
  lng: -83.203045
)

# spot28 = Spot.create!(
#   title:
#   destination_id: destination2.id,
#   price:
#   image_url:
#   host_id:
#   description:
#   lat:
#   lng:
# )
#
# spot29 = Spot.create!(
#   title:
#   destination_id: destination2.id,
#   price:
#   image_url:
#   host_id:
#   description:
#   lat:
#   lng:
# )
#
# spot30 = Spot.create!(
#   title:
#   destination_id: destination2.id,
#   price:
#   image_url:
#   host_id:
#   description:
#   lat:
#   lng:
# )
#
# spot31 = Spot.create!(
#   title:
#   destination_id: destination3.id,
#   price:
#   image_url:
#   host_id:
#   description:
#   lat:
#   lng:
# )
#
# spot32 = Spot.create!(
#   title:
#   destination_id: destination3.id,
#   price:
#   image_url:
#   host_id:
#   description:
#   lat:
#   lng:
# )
#
# spot33 = Spot.create!(
#   title:
#   destination_id: destination3.id,
#   price:
#   image_url:
#   host_id:
#   description:
#   lat:
#   lng:
# )
#
# spot34 = Spot.create!(
#   title:
#   destination_id: destination3.id,
#   price:
#   image_url:
#   host_id:
#   description:
#   lat:
#   lng:
# )
#
# spot35 = Spot.create!(
#   title:
#   destination_id: destination4.id,
#   price:
#   image_url:
#   host_id:
#   description:
#   lat:
#   lng:
# )
#
# spot36 = Spot.create!(
#   title:
#   destination_id: destination4.id,
#   price:
#   image_url:
#   host_id:
#   description:
#   lat:
#   lng:
# )
#
# spot37 = Spot.create!(
#   title:
#   destination_id: destination4.id,
#   price:
#   image_url:
#   host_id:
#   description:
#   lat:
#   lng:
# )
#
# spot38 = Spot.create!(
#   title:
#   destination_id: destination4.id,
#   price:
#   image_url:
#   host_id:
#   description:
#   lat:
#   lng:
# )
#
# spot39 = Spot.create!(
#   title:
#   destination_id: destination5.id,
#   price:
#   image_url:
#   host_id:
#   description:
#   lat:
#   lng:
# )
#
# spot40 = Spot.create!(
#   title:
#   destination_id: destination5.id,
#   price:
#   image_url:
#   host_id:
#   description:
#   lat:
#   lng:
# )
#
# spot41 = Spot.create!(
#   title:
#   destination_id: destination5.id,
#   price:
#   image_url:
#   host_id:
#   description:
#   lat:
#   lng:
# )
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
# spot28 = Spot.create!(
#   title:
#   destination_id: destination1.id,
#   price:
#   image_url:
#   host_id:
#   description:
#   lat:
#   lng:
# )

trip1 = Trip.create!(
  user_id: user1.id,
  spot_id: spot1.id,
  check_in: "2017/03/03",
  check_out: "2017/03/07",
  num_guests: 2
)

trip2 = Trip.create!(
  user_id: user1.id,
  spot_id: spot2.id,
  check_in: "2017/05/07",
  check_out: "2017/05/19",
  num_guests: 2
)

trip3 = Trip.create!(
  user_id: user1.id,
  spot_id: spot7.id,
  check_in: "2017/06/07",
  check_out: "2017/06/19",
  num_guests: 2
)

trip4 = Trip.create!(
  user_id: user1.id,
  spot_id: spot21.id,
  check_in: "2017/06/21",
  check_out: "2017/06/28",
  num_guests: 3
)

trip5 = Trip.create!(
  user_id: user1.id,
  spot_id: spot22.id,
  check_in: "2017/07/07",
  check_out: "2017/07/12",
  num_guests: 2
)

trip6 = Trip.create!(
  user_id: user1.id,
  spot_id: spot23.id,
  check_in: "2017/07/19",
  check_out: "2017/07/29",
  num_guests: 1
)
