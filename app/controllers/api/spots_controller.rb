class Api::SpotsController < ApplicationController
  #before_action :require_logged_in, only: [:create]

  def index
    @spots = (bounds ? Spot.in_bounds(bounds) : Spot.all)
  end

  def show
    @spot = Spot.find(params[:id])
  end

  def create
    @spot = Spot.create(spot_params)
    render :show
  end

  private
  def spots_params
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

  def bounds
    params[:bounds]
  end
end
