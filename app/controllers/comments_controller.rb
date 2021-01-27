class CommentsController < ApplicationController
  def create
    Comment.create(comments_params)
  end

  private
  def comments_params
    params.require(:commnet).permit(:text).merge(user_id: current_user.id, tweet_id: params[:tweet_id])
  end
end
