#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Destination.delete_all
User.delete_all

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
  image_url: "http://res.cloudinary.com/sharebnb/image/upload/v1489879217/sayan-nath-165552-san-francisco_uiourb.jpg",
  host_id: user2.id,
  description: "fun",
  lat: 37.835816,
  lng: -122.490760
)

Spot.create!(
  title: "Beautiful villa with a pool",
  destination_id: destination1.id,
  price: 347,
  image_url: "http://res.cloudinary.com/sharebnb/image/upload/v1489879215/vita-vilcina-3217-san-francisco_sshrfn.jpg",
  host_id: user18.id,
  description: "pool",
  lat: 37.790091,
  lng: -122.453583
)

##TODO add more spots
#
# Spot.create!(
#   title:
#   destination_id:
#   price:
#   image_url:
#   host_id:
#   description:
#   lat:
#   lng:
# )
#
# Spot.create!(
#   title:
#   destination_id:
#   price:
#   image_url:
#   host_id:
#   description:
#   lat:
#   lng:
# )
#
# Spot.create!(
#   title:
#   destination_id:
#   price:
#   image_url:
#   host_id:
#   description:
#   lat:
#   lng:
# )
#
# Spot.create!(
#   title:
#   destination_id:
#   price:
#   image_url:
#   host_id:
#   description:
#   lat:
#   lng:
# )
#
# Spot.create!(
#   title:
#   destination_id:
#   price:
#   image_url:
#   host_id:
#   description:
#   lat:
#   lng:
# )
#
# Spot.create!(
#   title:
#   destination_id:
#   price:
#   image_url:
#   host_id:
#   description:
#   lat:
#   lng:
# )
#
# Spot.create!(
#   title:
#   destination_id:
#   price:
#   image_url:
#   host_id:
#   description:
#   lat:
#   lng:
# )
