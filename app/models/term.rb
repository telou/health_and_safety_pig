class Term < ApplicationRecord
  validates :phrase, presence: true
end
