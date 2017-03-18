class Destination < ApplicationRecord
  validates :city, :image_url, :lat, :lng, presence: true

  has_many :spots,
    primary_key: :id,
    foreign_key: :destination_id,
    class_name: :Spot
end
