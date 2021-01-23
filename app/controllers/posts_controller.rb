class PostsController < ApplicationController
  def index
    @posts = Post.all.includes(:user).order("created_at DESC").page(params[:page]).per(15)
  end
  
  def new
    @posts = Post.all.includes(:user)
    posts = @posts
    @myposts = current_user.posts
    @post = Post.new
  end

  def create
    @post = Post.new(post_params)
    respond_to do |format|
      format.html { redirect_to action: 'new' }
      format.json {render json: @post }
    end

    # if @post.save
    #   redirect_to :root
    # else
    #   render action: :new
    # end
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