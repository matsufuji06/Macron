class Post < ApplicationRecord
  # リレーションを定義
  belongs_to :user
  
  mount_uploader :image, ImageUploader
end
