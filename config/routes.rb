Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    get 'search/destinations', to: 'destinations#search'
    get 'hosted_spots/users', to: 'users#hosted_spots'
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create, :update]
    resources :destinations, only: [:index]
    resources :spots, only: [:index, :show, :create, :update, :destroy]
    resources :trips, only: [:index, :create, :destroy]
  end
end
