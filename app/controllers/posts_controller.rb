class PostsController < ApplicationController
  def index
    @posts = Post.all.includes(:user)
    posts = @posts
    @myposts = current_user.posts
  end

  def new
    @post = Post.new
  end

  def create
    @post = Post.new(post_params)
    if @post.save
      redirect_to :root
    else
      render action: :new
    end
  end

  private
  def post_params
    params.require(:post).permit(:food, :calorie, :carbo, :fat, :protein, :weight, :date).merge(user: current_user)
  end
end