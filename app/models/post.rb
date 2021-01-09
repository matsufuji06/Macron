class Post < ApplicationRecord
  # リレーションを定義
  belongs_to :user

  # ImageUploaderをマウント
  mount_uploader :image, ImageUploader

  # バリデーションを記述
  post_number = /\A[0-9]+\z/
  validates :food, presence: true
  validates :calorie, presence: true, format: {with: post_number}
  validates :carbo, presence: true, format: {with: post_number}
  validates :fat, presence: true, format: {with: post_number}
  validates :protein, presence: true, format: {with: post_number}
  validates :date, presence: true
end
