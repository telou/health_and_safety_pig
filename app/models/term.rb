class Term < ApplicationRecord
  validates :phrase, presence: true, length: { in: 5..50 }

  after_initialize ->(term) { term.translation = EnglishPigTranslator.new.translate(term.phrase) }
end
