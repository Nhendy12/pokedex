Rails.application.routes.draw do
  namespace :api do 
      resources :types, only: [:index]
      resources :pokemon, only: [:index, :update, :create]
  end
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
