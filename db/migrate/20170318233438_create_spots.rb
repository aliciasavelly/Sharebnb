class CreateSpots < ActiveRecord::Migration[5.0]
  def change
    create_table :spots do |t|
      t.string :title, null: false
      t.integer :destination_id, null: false
      t.integer :price, null: false
      t.string :image_url
      t.integer :host_id, null: false
      t.text :description
      t.float :lat, null: false
      t.float :lng, null: false

      t.timestamps
    end

    add_index :spots, :destination_id
    add_index :spots, :host_id
  end
end
