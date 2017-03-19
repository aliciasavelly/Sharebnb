Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create, :update]
    resources :destinations, only: [:index]
    resources :spots, only: [:index, :show, :create]
  end
end

##TODO add spots destroy and update
