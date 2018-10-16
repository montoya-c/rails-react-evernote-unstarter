class UserSerializer < ActiveModel::Serializer
  has_many :journal_entries
  attributes :id, :username, :first_name, :last_name, :email
end
