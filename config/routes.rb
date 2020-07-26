Rails.application.routes.draw do
  devise_for :users
  root to: "games#index"
  resource :games, only:[:new, :create]
  resources :events
  #get 'games/index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
