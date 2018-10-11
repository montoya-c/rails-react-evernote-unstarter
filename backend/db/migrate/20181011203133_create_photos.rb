class CreatePhotos < ActiveRecord::Migration[5.2]
  def change
    create_table :photos do |t|
      t.string :image
      t.string :title
      t.belongs_to :journal_entry, foreign_key: true

      t.timestamps
    end
  end
end
