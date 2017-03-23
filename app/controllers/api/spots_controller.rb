class Api::SpotsController < ApplicationController
  #before_action :require_logged_in, only: [:create]

  def index
    spots = (bounds ? Spot.in_bounds(bounds) : Spot.all)

    if (params[:minPrice] && params[:maxPrice])
      spots = spots.where(price: price_range)
    end

    @spots = spots.includes(:host)

    render :index
  end

  def show
    
    @spot = Spot.find(params[:id])
    render :show
    # @spot = spot.includes(:host)
  end

  def create
    @spot = Spot.create!(spot_params)
    render :show
  end

  def update
    @spot = Spot.find(params[:id])

    if @spot && @spot.update_attributes(spot_params) && @spot.host_id == current_user.id
      render "api/spots/show"
    else
      render json: @spot.errors.full_messages, status: 422
    end
  end

  def destroy
    @spot = Spot.find_by_id(params[:id])

    if @spot && @spot.host_id == current_user.id
      @spot.destroy
      render "api/spots/show"
    end
  end

  private

  def price_range
    (params[:minPrice]..params[:maxPrice])
  end

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

  def bounds
    params[:bounds]
  end
end
