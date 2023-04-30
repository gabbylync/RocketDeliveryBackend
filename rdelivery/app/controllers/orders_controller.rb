class OrdersController < ApplicationController
  before_action :current_order, only: [:show, :edit, :update, :destroy]
  
  def index
    @orders = Order.all
  end

  def new
    @order = Order.new
  end

  def create
    order = Order.create(order_params)

    respond_to do |format|
      if @order.save
        format.html { redirect_to order_url(@order), notice: "Order was successfully created." }
        format.json { render :show, status: :created, location: @order }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @order.errors, status: :unprocessable_entity }
      end
    end
  end

  def show
  end

  def edit
  end

  # PATCH/PUT /orders/1 or /orders/1.json
  def update
    respond_to do |format|
      if @order.update(order_params)
        format.html { redirect_to order_url(@order), notice: "Order was successfully updated." }
        format.json { render :show, status: :ok, location: @order }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @order.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @order.destroy

    respond_to do |format|
      format.html { redirect_to orders_url, notice: "Order was successfully destroyed." }
      format.json { head :no_content }
    end
  end
  private

  def order_params
    params.require(:order).permit(:restaurant_rating, :customer_id, :restaurant_id, :order_status_id, :courier_id)
  end

  def current_order
    @order = Order.find(params[:id])
  end
end
