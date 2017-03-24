json.extract! user, :id, :username, :first_name, :image_url

json.hosted_spots do
  json.array! user.hosted_spots do |spot|
    json.id spot.id
    json.title spot.title
    json.destination_id spot.destination_id
    json.price spot.price
    json.image_url spot.image_url
    json.host_id spot.host_id
    json.description spot.description
    json.lat spot.lat
    json.lng spot.lng
  end
end



# json.hosted_spots do
#   json.partial! 'api/spots/index', hosted_spots: user.hosted_spots
# json.hosted_spots user.hosted_spots.pluck()
#
# json.hosted_spots do
#   json.partial! 'spot', collection: user.hosted_spots, as: :spot
# end

# json.array! user.hosted_spots, partial: 'api/users/spot1', as: :hosted_spot
# json.partial! 'spot', formats: :json, hosted_spots: user.hosted_spots
# json.partial! 'api/spots/spot', locals: { hosted_spots: user.hosted_spots }

# json.hosted_spots user.hosted_spots, partial: 'api/spots/spot', as: :spots
