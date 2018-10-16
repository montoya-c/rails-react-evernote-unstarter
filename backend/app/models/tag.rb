class Tag < ApplicationRecord
  has_many :journal_entry_tags
  has_many :journal_entries, through: :journal_entry_tags
end
