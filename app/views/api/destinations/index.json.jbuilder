@destinations.each do |destination|
  json.set! destination.id do
    json.extract! destination, :city, :image_url, :lat, :lng, :id
  end
end
