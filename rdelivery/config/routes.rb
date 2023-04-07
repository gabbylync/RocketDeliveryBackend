Rails.application.routes.draw do
  devise_for :users
  authenticate :user, -> (user) {user.employee} do
     resources :addresses
     resources :employees
     resources :restaurants, only: [:new, :create, :show, :edit, :update, :index]
  end
  root to: "home#index"
  get '/(*url)', to: redirect('/')
end


  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"