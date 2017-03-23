# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170323205634) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "destinations", force: :cascade do |t|
    t.string   "city",       null: false
    t.string   "image_url",  null: false
    t.float    "lat",        null: false
    t.float    "lng",        null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "reviews", force: :cascade do |t|
    t.integer  "spot_id",    null: false
    t.integer  "user_id",    null: false
    t.text     "detail",     null: false
    t.string   "date",       null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["spot_id"], name: "index_reviews_on_spot_id", using: :btree
    t.index ["user_id"], name: "index_reviews_on_user_id", using: :btree
  end

  create_table "spots", force: :cascade do |t|
    t.string   "title",          null: false
    t.integer  "price",          null: false
    t.string   "image_url"
    t.integer  "host_id",        null: false
    t.text     "description"
    t.float    "lat",            null: false
    t.float    "lng",            null: false
    t.datetime "created_at",     null: false
    t.datetime "updated_at",     null: false
    t.integer  "destination_id"
    t.index ["destination_id"], name: "index_spots_on_destination_id", using: :btree
    t.index ["host_id"], name: "index_spots_on_host_id", using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "username",        null: false
    t.string   "first_name",      null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.string   "image_url"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.index ["password_digest"], name: "index_users_on_password_digest", using: :btree
    t.index ["username"], name: "index_users_on_username", unique: true, using: :btree
  end

end
