class TopController < ApplicationController
  def index
    @posts = Post.all.includes(:user)
    posts = @posts
    @myposts = current_user.posts
  end
end
