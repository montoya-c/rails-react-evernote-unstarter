# README

1) Seed file: create data
2) `rails c` and verify data there and set up
3) models
4) routes + controllers (remember: send authorized req through POSTMAN)
5) serializers (at same time: users, their many journal entries)
6) make request from front-end
7) render the data
```class UserSerializers < ActiveModel::Serializer
  attributes :journal_entries, :id, :email, :whatever
end```














This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
