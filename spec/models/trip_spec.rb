require 'rails_helper'

RSpec.describe Trip, type: :model do
  it { should validate_presence_of(:user_id) }
  it { should validate_presence_of(:spot_id)}
  it { should validate_presence_of(:check_in)}
  it { should validate_presence_of(:check_out)}
  it { should validate_presence_of(:num_guests)}
  it { should belong_to(:traveler) }
end
