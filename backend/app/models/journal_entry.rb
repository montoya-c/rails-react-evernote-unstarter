class JournalEntry < ApplicationRecord
  belongs_to :user
  has_many :photos
  has_many :journal_entry_tags
  has_many :tags, through: :journal_entry_tags

end
