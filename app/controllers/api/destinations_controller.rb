class Api::DestinationsController < ApplicationController
  def index
    @destinations = Destination.all
  end

  # def search
  #   if params[:letters].length < 1
  #     @cities = []
  #   else
  #     @cities = Destination.find_by_letters(params[:letters])
  #   end
  # end

  def filter_params
    params.require(:filters).permit(:letters)
  end
end
