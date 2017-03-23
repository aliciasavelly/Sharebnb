class AddDestinationIdToSpots < ActiveRecord::Migration[5.0]
  def change
    add_column :spots, :destination_id, :integer
    add_index :spots, :destination_id
  end
end
