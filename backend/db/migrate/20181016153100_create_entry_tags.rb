class CreateEntryTags < ActiveRecord::Migration[5.2]
  def change
    create_table :journal_entry_tags do |t|
      t.integer :journal_entry_id
      t.integer :tag_id

      t.timestamps
    end
  end
end
