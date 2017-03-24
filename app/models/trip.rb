class Trip < ApplicationRecord
  validates :user_id, :spot_id, :check_in, :check_out, :num_guests, presence: true

  belongs_to :traveler,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User
end
