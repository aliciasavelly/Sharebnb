class Api::UsersController < ApplicationController
  def show
    user = User.find_by_id(params[:id])
    @user = user.includes(:hosted_spots)
    render :show
  end

  def hosted_spots
    # debugger
    @hosted_spots = current_user.hosted_spots
    render :hosted_spots
  end

  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def update
    @user = User.find_by_id(params[:id])

    if @user && @user.update_attributes(user_params)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private
  def user_params
    params.require(:user).permit(:username, :password, :first_name, :image_url)
  end
end
