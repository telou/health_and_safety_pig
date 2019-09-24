class Term < ApplicationRecord
  validates :phrase, presence: true, length: { in: 5..50 }
end
