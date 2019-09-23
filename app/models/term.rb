class Term < ApplicationRecord
  has_one :translation, dependent: :destroy
end
