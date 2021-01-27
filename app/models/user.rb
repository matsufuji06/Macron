class User < ApplicationRecord
  # リレーションを定義
  has_many :posts
  has_many :comments
  has_one :standard
  
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  
  # バリデーションを記述
  validates :name, presence: true, uniqueness: true

  # ゲストユーザーログインのメソッドを定義
  def self.guest
    find_or_create_by!(email: 'guest@example.com', name: "ゲストユーザーさん") do |user|
      user.password = SecureRandom.urlsafe_base64
      # user.confirmed_at = Time.now
    end
  end
end
