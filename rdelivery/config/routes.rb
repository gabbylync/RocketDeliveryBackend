Rails.application.routes.draw do
  devise_for :users
  authenticate :user, -> (user) {user.employee} do
     resources :addresses
     resources :employees
     resources :restaurants, only: [:new, :create, :show, :edit, :update, :index]
     resources :customers
     resources :products
     resources :orders
     resources :product_orders
     resources :order_statuses
     resources :couriers
     resources :courier_statuses
  end


  namespace :api do
    get "products", to: "products#index"
    get "restaurants", to: "restaurants#index"
    post "order", to: "orders#create"
    post "login", to: "auth#index"
    post "order/:id/status", to: "orders#status"
    get "orders", to: "orders#index"
   
  end



  root to: "home#index"


  get '/(*url)', to: redirect('/')
end


  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"