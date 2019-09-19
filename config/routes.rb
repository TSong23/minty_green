Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"

  namespace :api, default: {format: :json} do 
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :stocks, only: [:index, :show]
    resources :watchlists, only: [:index, :create, :update, :show, :destroy]
    resources :watchlist_items, only: [:index, :create, :destroy]
  end

end
