require 'rails_helper'

RSpec.describe User, type: :model do
  it { should validate_presence_of(:username) }
  it { should validate_presence_of(:first_name) }
  it { should validate_presence_of(:session_token) }
  it { should validate_presence_of(:password_digest) }

  it { should validate_length_of(:password).is_at_least(6) }

  it { should have_many(:hosted_spots) }
  it { should have_many(:trips) }

  describe "uniqueness" do
    subject { User.new(username: "username", first_name: "first", password: "password123") }
    it { should validate_uniqueness_of(:username) }
  end

  describe "password encryption" do
    it "doesn't save passwords to the database" do
      User.create!(username: "username5", first_name: "first", password: "password123")
      user = User.find_by_username("username5")
      expect(user.password).not_to be("password123")
    end

    it "encrypts the password using BCrypt" do
      expect(BCrypt::Password).to receive(:create)
      User.new(username: "username3", first_name: "first", password: "password123")
    end
  end

  describe "session token" do
    it "assigns a session_token if one isn't given" do
      user = User.create!(username: "username4", first_name: "first", password: "password123")
      expect(user.session_token).not_to be_nil
    end
  end

  describe ".find_by_credentials" do
    it "finds correct user with username and password" do
      user = User.create!(username: "username6", first_name: "first123", password: "password123")
      expect(User.find_by_credentials("username6", "password123")).to eq(user)
    end
  end
end
