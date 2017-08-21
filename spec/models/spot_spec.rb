require 'rails_helper'

RSpec.describe Spot, type: :model do
  it { should validate_presence_of(:title) }
  it { should validate_presence_of(:destination_id)}
  it { should validate_presence_of(:price)}
  it { should validate_presence_of(:host_id)}
  it { should validate_presence_of(:lat)}
  it { should validate_presence_of(:lng)}
  it { should belong_to(:host) }

  describe ".in_bounds" do
    it "determines if a spot is within the bounds of the map size" do
      
    end
  end
end
