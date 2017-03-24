class FixTripsColumns < ActiveRecord::Migration[5.0]
  def change
    remove_column :trips, :spot_od, :integer
    add_column :trips, :spot_id, :integer
  end
end
