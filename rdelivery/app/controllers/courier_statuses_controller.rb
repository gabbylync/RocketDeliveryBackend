class CourierStatusesController < ApplicationController
  before_action :current_courier_status, only: [:show, :edit, :update, :destroy]
  def index
    @courier_statuses = CourierStatus.all
  end

  def new
    @courier_status = CourierStatus.new
  end

  def create
    courier_status = CourierStatus.create(courier_status_params)

    redirect_to courier_status_path(courier_status)
  end

  def show
  end

  def edit
  end

  def update
    @courier_status.update(courier_status_params)

    redirect_to courier_status_path(@courier_status)
  end

  def destroy
    @courier_status.destroy

    redirect_to courier_statuses_path
  end
  private

  def courier_status_params
    params.require(:courier_status).permit(:product_quantity, :name)
  end

  def current_courier_status
    @courier_status = CourierStatus.find(params[:id])
  end
end
