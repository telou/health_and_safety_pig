class Term < ApplicationRecord
  validates :phrase, presence: true
  validates :translation, presence: true
end
