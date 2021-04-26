class Community < ApplicationRecord
  validates :name, presence: true
  validates :name, length: { minimum: 2 }

  validates :description, presence: true

  mount_uploader :image, ImageUploader

  belongs_to :user
end
