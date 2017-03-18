#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Destination.delete_all
User.delete_all

User.create!(
  username: "pibble46",
  first_name: "Frances",
  password: Faker::Internet.password,
  image_url: "https://res.cloudinary.com/sharebnb/image/upload/v1489879063/christopher-ayme-157131-dog_hgko2i.jpg"
)

User.create!(
  username: "kayhermiston",
  first_name: "Kay",
  password: Faker::Internet.password,
  image_url: "http://res.cloudinary.com/sharebnb/image/upload/v1489876140/alex-harvey-34864-woman_kqybyx.jpg"
)

User.create!(
  username: "orval.h.hoeger",
  first_name: "Orval",
  password: Faker::Internet.password,
  image_url: "https://res.cloudinary.com/sharebnb/image/upload/v1489878941/allef-vinicius-147930-man_guyxia.jpg"
)

User.create!(
  username: "musicisfun53",
  first_name: "Monica",
  password: Faker::Internet.password,
  image_url: "https://res.cloudinary.com/sharebnb/image/upload/v1489878731/alexander-dummer-150646-family_vilub7.jpg"
)

User.create!(
  username: "coolcoder74",
  first_name: "Zackery",
  password: Faker::Internet.password,
  image_url: "https://res.cloudinary.com/sharebnb/image/upload/v1489878789/chelsea-ferenando-190941-man_eg22ds.jpg"
)

User.create!(
  username: "codingforfun34",
  first_name: "Ivy",
  password: Faker::Internet.password,
  image_url: "https://res.cloudinary.com/sharebnb/image/upload/v1489878858/allef-vinicius-152932-woman_ydsxll.jpg"
)

User.create!(
  username: "luv2travel22",
  first_name: "Cyril",
  password: Faker::Internet.password,
  image_url: "https://res.cloudinary.com/sharebnb/image/upload/v1489878665/clem-onojeghuo-151794-man_bthftr.jpg"
)

User.create!(
  username: "rubieloveskittens",
  first_name: "Rubie",
  password: Faker::Internet.password,
  image_url: "https://res.cloudinary.com/sharebnb/image/upload/v1489878556/dariusz-sankowski-46480-cat_bxlqai.jpg"
)

User.create!(
  username: "travels4sean",
  first_name: "Sean",
  password: Faker::Internet.password,
  image_url: "http://res.cloudinary.com/sharebnb/image/upload/v1489876794/fritz-walter-152075-man_byvsql.jpg"
)

User.create!(
  username: "mara.leannon",
  first_name: "Mara",
  password: Faker::Internet.password,
  image_url: "http://res.cloudinary.com/sharebnb/image/upload/v1489876822/eli-defaria-14556-woman_mtzakc.jpg"
)

User.create!(
  username: "worldtraveler28",
  first_name: "Boyd",
  password: "C4BtZbPzQ4NoZkX6",
  image_url: "http://res.cloudinary.com/sharebnb/image/upload/v1489876731/juil-yoon-155233-man_i3siec.jpg"
)

User.create!(
  username: "adventurewithpuppies",
  first_name: "Misael",
  password: "RlS43t0bE4",
  image_url: "http://res.cloudinary.com/sharebnb/image/upload/v1489876758/jez-timms-50295-dog_loxq5g.jpg"
)

User.create!(
  username: "football4life",
  first_name: "Clement",
  password: Faker::Internet.password,
  image_url: "http://res.cloudinary.com/sharebnb/image/upload/v1489876626/keith-johnston-216347-man_ctvtib.jpg"
)

User.create!(
  username: "delilah.jakubowski",
  first_name: "Delilah",
  password: Faker::Internet.password,
  image_url: "http://res.cloudinary.com/sharebnb/image/upload/v1489876651/cristian-newman-153712-woman_k7uslq.jpg"
)

User.create!(
  username: "emmitt.reichert",
  first_name: "Emmitt",
  password: Faker::Internet.password,
  image_url: "http://res.cloudinary.com/sharebnb/image/upload/v1489876680/kahar-saidyhalam-159353-man_kerqzc.jpg"
)

User.create!(
  username: "worldtraveler29",
  first_name: "Elias",
  password: Faker::Internet.password,
  image_url: "http://res.cloudinary.com/sharebnb/image/upload/v1489876700/jean-gerber-36509-man_dbdi7v.jpg"
)

User.create!(
  username: "photosoftheworld",
  first_name: "Monte",
  password: Faker::Internet.password,
  image_url: "http://res.cloudinary.com/sharebnb/image/upload/v1489876588/lesly-b-juarez-220440-man_cujtga.jpg"
)

User.create!(
  username: "lisette.bauch",
  first_name: "Lisette",
  password: Faker::Internet.password,
  image_url: "http://res.cloudinary.com/sharebnb/image/upload/v1489876557/lau-keith-146366-woman_vvhnfp.jpg"
)

User.create!(
  username: "yoga4life",
  first_name: "Laverne",
  password: Faker::Internet.password,
  image_url: "http://res.cloudinary.com/sharebnb/image/upload/v1489876526/marion-michele-191320-woman_vmmccq.jpg"
)

User.create!(
  username: "trishatravels91",
  first_name: "Trisha",
  password: "QrZp0mDj1sLwLw",
  image_url: "http://res.cloudinary.com/sharebnb/image/upload/v1489876399/freestocks-org-147688-woman_pwn9ew.jpg"
)

User.create!(
  username: "sunshineflowers",
  first_name: "Herta",
  password: "DqTd8h7qP4",
  image_url: "http://res.cloudinary.com/sharebnb/image/upload/v1489876432/tim-mossholder-155004-woman_ognzfy.jpg"
)

User.create!(
  username: "luv4nature",
  first_name: "Rodrigo",
  password: Faker::Internet.password,
  image_url: "http://res.cloudinary.com/sharebnb/image/upload/v1489876466/peter-hershey-112798-man_o2wc2l.jpg"
)

User.create!(
  username: "masterchefmaureen",
  first_name: "Maureen",
  password: Faker::Internet.password,
  image_url: "http://res.cloudinary.com/sharebnb/image/upload/v1489876498/william-stitt-162611-woman_xllngf.jpg"
)

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
  lng: -122.419413
)

Destination.create!(
  city: "Boston",
  image_url: "http://res.cloudinary.com/sharebnb/image/upload/q_56/v1489776355/boston_back_bay_horizontal_wbxzij.jpg",
  lat: 42.357004,
  lng: -71.062309
)

Destination.create!(
  city: "New York",
  image_url: "http://res.cloudinary.com/sharebnb/image/upload/q_70/v1489778201/philipp-henzler-nyc-horizontal_ujgwcr.jpg",
  lat: 40.777878,
  lng: -73.937499
)

Destination.create!(
  city: "Seattle",
  image_url: "http://res.cloudinary.com/sharebnb/image/upload/v1489776342/seattle-horizontal_oaldvs.jpg",
  lat: 47.598559,
  lng: -122.326300
)

Destination.create!(
  city: "Chicago",
  image_url: "http://res.cloudinary.com/sharebnb/image/upload/q_64/v1489778951/oxecvx6ql3epkhjtm7qo.jpg",
  lat: 41.883979,
  lng: -87.634669
)

Destination.create!(
  city: "Detroit",
  image_url: "http://res.cloudinary.com/sharebnb/image/upload/q_59/v1489778695/doug-zuba-92979_uepk4f.jpg",
  lat: 42.336985,
  lng: -83.054480
)
