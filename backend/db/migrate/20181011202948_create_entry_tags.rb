class CreateEntryTags < ActiveRecord::Migration[5.2]
  def change
    create_table :entry_tags do |t|
      t.belongs_to :journal_entry, foreign_key: true
      t.belongs_to :tag, foreign_key: true

      t.timestamps
    end
  end
end
