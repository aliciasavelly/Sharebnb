class Destination < ApplicationRecord
  validates :city, :image_url, :lat, :lng, presence: true

end
