class Community < ApplicationRecord
  validates :name, presence: true
  validates :name, length: { minimum: 2 }

  validates :description, presence: true

  belongs_to :user
end
