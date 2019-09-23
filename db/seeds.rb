# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Translation.destroy_all
Term.destroy_all

hello = Term.create(phrase: "Hello")
banana = Term.create(phrase: "Banana")
peanut = Term.create(phrase: "Peanut")
orange = Term.create(phrase: "orange")

Translation.create!(term_id: hello.id, translation: "ellohay")
Translation.create!(term_id: banana.id, translation: "ananabay")
Translation.create!(term_id: peanut.id, translation: "eanutpay")
Translation.create!(term_id: orange.id, translation: "orangeyay")
