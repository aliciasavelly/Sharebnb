class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    # @user = user.includes(:)

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
