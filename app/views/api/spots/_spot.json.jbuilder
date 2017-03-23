json.extract! spot, :id,
                    :title,
                    :destination_id,
                    :price,
                    :image_url,
                    :host_id,
                    :description,
                    :lat,
                    :lng

json.host do
  json.partial! 'api/users/user', user: spot.host
end
