class TopController < ApplicationController
  def new_guest
    user = User.find_or_create_by(email: 'guest@example.com') do |user|
      user.password = SecureRamdom.urlsafe_base64
      # user.comfirmed_at = Time.now
  end
  sign_in user
  redirect_to root_path, notice: "ゲストユーザーとしてログインしました。"
end
