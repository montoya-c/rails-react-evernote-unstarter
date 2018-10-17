# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Photo.delete_all
JournalEntryTag.delete_all
Tag.delete_all
JournalEntry.delete_all
User.delete_all

user1 = User.create(username: 'DjTravels', password_digest: BCrypt::Password.create('123'), first_name: 'Jean', last_name: 'Jomadiao', email:'djj@outlook.com' )



journalEntry1 = JournalEntry.create( title:'East', content:'“Be fearless in the pursuit of what sets your soul on fire.”', user_id: user1.id)

journalEntry2 = JournalEntry.create( title:'South', content:'”Adventure may hurt you but monotony will kill you.”', user_id: user1.id)
journalEntry3 = JournalEntry.create( title:'SouthEast', content:'“Life is either a daring adventure or nothing at all.” ', user_id: user1.id)
journalEntry4 = JournalEntry.create( title:'El Norte', content:'Caminante, son tus huellas, el camino y nada más; Caminante, no hay camino, se hace camino al andar.', user_id: user1.id)

photo1 = Photo.create(image:'IMG_0732.JPG', title:'Photo1', journal_entry:journalEntry1)
photo2 = Photo.create(image:'IMG_0732.JPG', title:'Photo2', journal_entry:journalEntry2)
photo3 = Photo.create(image:'IMG_0732.JPG', title:'Photo3', journal_entry:journalEntry3)
photo4 = Photo.create(image:'IMG_0732.JPG', title:'Photo4', journal_entry:journalEntry4)

tag1 = Tag.create(name:'Naturaleza')
tag2 = Tag.create(name:'Mexico')
tag3 = Tag.create(name:'Muse')
tag4 = Tag.create(name:'Food')
tag5 = Tag.create(name:'Canada')
tag6 = Tag.create(name:'Reflections')


tags = [tag1, tag2, tag3, tag4, tag5, tag6]
entryTag1 = JournalEntryTag.create(journal_entry:journalEntry1, tag:tags.sample)
entryTag2 = JournalEntryTag.create(journal_entry:journalEntry2, tag:tags.sample)
entryTag3 = JournalEntryTag.create(journal_entry:journalEntry3, tag:tags.sample)
entryTag4 = JournalEntryTag.create(journal_entry:journalEntry4, tag:tags.sample)
entryTag5 = JournalEntryTag.create(journal_entry:journalEntry2, tag:tags.sample)
entryTag6 = JournalEntryTag.create(journal_entry:journalEntry1, tag:tags.sample)
entryTag7 = JournalEntryTag.create(journal_entry:journalEntry3, tag:tags.sample)
