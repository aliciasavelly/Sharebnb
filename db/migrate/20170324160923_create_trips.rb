class CreateTrips < ActiveRecord::Migration[5.0]
  def change
    create_table :trips do |t|
      t.integer :user_id, null: false
      t.integer :spot_od, null: false
      t.date :check_in
      t.date :check_out
      t.integer :num_guests

      t.timestamps
    end
  end
end
