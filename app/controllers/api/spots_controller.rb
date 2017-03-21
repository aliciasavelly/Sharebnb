class Api::SpotsController < ApplicationController
  #before_action :require_logged_in, only: [:create]

  def index
    ##TODO
    # switch out once google maps set up
    @spots = (bounds ? Spot.in_bounds(bounds) : Spot.all)
    render :index
    # @spots = Spot.all
  end

  def show
    @spot = Spot.find(params[:id])
  end

  def create
    @spot = Spot.create!(spot_params)
    render :show
  end

  def update
    # debugger
    @spot = Spot.find(params[:id])
    # debugger
    if @spot && @spot.update_attributes(spot_params) && @spot.host_id == current_user.id
      render "api/spots/show"
    else
      render json: @spot.errors.full_messages, status: 422
    end
  end

  def destroy
    # @spot = current_user.hosted_spots.find(params[:id])
    @spot = Spot.find_by_id(params[:id])

    if @spot && @spot.host_id == current_user.id
      @spot.destroy
      render "api/spots/show"
    end
  end

  private
  def spot_params
    params.require(:spot).permit(
      :title,
      :destination_id,
      :price,
      :image_url,
      :host_id,
      :description,
      :lat,
      :lng
    )
  end

##TODO
#add this one once google maps set up
  def bounds
    params[:bounds]
  end
end
