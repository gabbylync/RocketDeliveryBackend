class CouriersController < ApplicationController
  before_action :current_courier, only: [:show, :edit, :update, :destroy]

  def index
    @couriers = Courier.all
  end

  def new
    @courier = Courier.new
  end

  def create
    courier = Courier.create(courier_params)

    redirect_to courier_path(courier)
  end

  def show
  end

  def edit
  end

  def update
    @courier.update(courier_params)

    redirect_to courier_path(@courier)
  end

  def destroy
    @courier.destroy

    redirect_to couriers_path
  end

  private

  def courier_params
    params.require(:courier).permit(:phone, :email, :active, :user_id, :address_id, :courier_status_id)
  end

  def current_courier
    @courier = Courier.find(params[:id])
  end

end
