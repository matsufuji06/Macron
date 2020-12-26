class PostsController < ApplicationController
  def index
    @posts = Post.all.includes(:user)
  end
  
  def new
    @posts = Post.all.includes(:user)
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

  def show
    @post = Post.find(params[:id])
  end
  
  def destroy
    @post = Post.find(params[:id])
    @post.destroy
    redirect_to :root
  end

  private
  def post_params
    params.require(:post).permit(:food, :image, :calorie, :carbo, :fat, :protein, :weight, :date).merge(user: current_user)
  end
end