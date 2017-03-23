class Spot < ApplicationRecord
  validates :title, :destination_id, :price, :host_id, :lat, :lng, presence: true

  belongs_to :host,
    primary_key: :id,
    foreign_key: :host_id,
    class_name: :User

  # belongs_to :destination,
  #   primary_key: :id,
  #   foreign_key: :destination_id,
  #   class_name: :Destination

  # has_many :trips,
  #   primary_key: :id,
  #   foreign_key: :spot_id,
  #   class_name: :spot_id

  # has_many :travelers,
  #   through: :trips,
  #   source: :travelers

  def self.in_bounds(bounds)
    self.where("lat < ?", bounds[:northEast][:lat])
        .where("lat > ?", bounds[:southWest][:lat])
        .where("lng > ?", bounds[:southWest][:lng])
        .where("lng < ?", bounds[:northEast][:lng])
  end
end
