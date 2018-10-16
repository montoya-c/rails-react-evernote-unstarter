class User < ApplicationRecord
  has_many :journal_entries
  has_secure_password
  validates :username, uniqueness: { case_sensitive: false }
end
