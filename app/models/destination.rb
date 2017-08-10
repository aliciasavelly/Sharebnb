class Destination < ApplicationRecord
  validates :city, :image_url, :lat, :lng, presence: true

  # has_many :spots,
  #   primary_key: :id,
  #   foreign_key: :destination_id,
  #   class_name: :Spot

  def self.locations
    Destination.select(:city).pluck(:city).uniq
  end

  def self.find_by_letters(letters)
    Destination.select(:city)
      .where("city ~ ?", letters)
      .pluck(:city)
      .uniq
  end
end
