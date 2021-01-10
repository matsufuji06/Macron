class StandardsController < ApplicationController
  before_action :authenticate_user!
  
  def new
    @standard = Standard.new
  end

  def create
    @standard = Standard.new(standard_params)
    if @standard.save
      redirect_to :root
    else
      render action: :new
    end
  end

  private
  def standard_params
    params.require(:standard).permit(:calorie, :carbo, :fat, :protein, :weight, :idealweight, :metabolism, :age, :sex).merge(user: current_user)
  end
end
