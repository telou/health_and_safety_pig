# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Term.destroy_all

hello = Term.create!(phrase: "Hello World", translation: "Ellohay Orldway")
banana = Term.create!(phrase: "Banana Pajama", translation: "Ananabay Ajamapay")
peanut = Term.create!(phrase: "Peanut", translation: "Eanutpay")
orange = Term.create!(phrase: "Orange Peel", translation: "Erangeyay Eelpay")
