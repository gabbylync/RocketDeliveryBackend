Rails.application.routes.draw do
  devise_for :users
resources :addresses
resources :employees
resources :restaurants, only: [:new, :create, :show, :edit, :update, :index]
root to: "home#index"
end


  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"