@hosted_spots.each do |spot|
  json.set! spot.id do
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
