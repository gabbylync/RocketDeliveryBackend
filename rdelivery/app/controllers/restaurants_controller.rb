class RestaurantsController < ApplicationController
  before_action :current_restaurant, only: [:show, :edit, :update]
  
  def index
    @restaurants = Restaurant.all
  end

  def new
    @restaurant = Restaurant.new
  end

  def create
    restaurant = Restaurant.create(restaurant_params)

    redirect_to restaurant_path(restaurant)
  end

  def show
  end

  def edit
  end

  def update
    @restaurant.update(restaurant_params)

    redirect_to restaurant_path(@restaurant)
  end

  def restaurant_params
    params.require(:restaurant).permit(:phone, :email, :name, :price_range, :active, :user_id, :address_id)
  end

  def current_restaurant
    @restaurant = Restaurant.find(params[:id])
  end 
end
