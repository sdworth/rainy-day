class CreateSongs < ActiveRecord::Migration
  def change
    create_table :songs do |t|
      t.string :link
      t.integer :likes, default: 0
      t.string :title

      t.timestamps
    end
  end
end
