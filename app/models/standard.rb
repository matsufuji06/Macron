class Standard < ApplicationRecord
  # リレーションを定義
  belongs_to :user

  # バリデーションを記述
  standard_number = /\A[0-9]+\z/
  validates :calorie, presence: true, format: {with: standard_number}
  validates :carbo, presence: true, format: {with: standard_number}
  validates :fat, presence: true, format: {with: standard_number}
  validates :protein, presence: true, format: {with: standard_number}
  validates :weight, presence: true, format: {with: standard_number}
  validates :idealweight, presence: true, format: {with: standard_number}
  validates :metabolism, presence: true, format: {with: standard_number}
  validates :age, presence: true
  validates :sex, presence: true
end
