class ProductsController < ApplicationController
  before_action :current_product, only: [:show, :edit, :update, :destroy]

  def index
    @products = Product.all
  end

  def new
    @product = Product.new
  end

  def create
    product = Product.create(product_params)

    redirect_to product_path(product)
  end

  def show
  end

  def edit
  end

  def update
    @product.update(product_params)

    redirect_to product_path(@product)
  end

  def destroy
    @product.destroy

    redirect_to products_path
  end
  private

  def product_params
    params.require(:product).permit(:name, :description, :cost, :restaurant_id)
  end

  def current_product
    @product = Product.find(params[:id])
  end
end
