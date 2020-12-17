class TopController < ApplicationController
  def index
    @posts = Post.all.includes(:user)
    posts = @posts
    @myposts = current_user.posts.order('created_at DESC').limit(5)
  end
end
