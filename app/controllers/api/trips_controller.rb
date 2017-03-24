  class Api::TripsController < ApplicationController
  def index
    @trips = Trip.where(user_id: current_user.id)
  end

  def create
    @trip = Trip.create!(trip_paramas)
    render :show
  end

  def destroy
    @trip = Trip.find_by_id(params[:id])

    if @trip
      @trip.destroy
      render "api/trips/show"
    end
  end

  private
  def trip_paramas
    params.require(:trip).permit(:user_id,
      :spot_id,
      :check_in,
      :check_out,
      :num_guests
    )
  end
end
