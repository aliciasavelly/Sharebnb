class RemoveDestinationIdColumnFromSpots < ActiveRecord::Migration[5.0]
  def change
    remove_column :spots, :destination_id
  end
end
