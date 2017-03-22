class CreateReviews < ActiveRecord::Migration[5.0]
  def change
    create_table :reviews do |t|
      t.integer :spot_id, null: false
      t.integer :user_id, null: false
      t.text :detail, null: false
      t.string :date, null: false

      t.timestamps
    end

    add_index :reviews, :spot_id
    add_index :reviews, :user_id
  end
end
