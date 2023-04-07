class AddressesController < ApplicationController
  before_action :current_address, only: [:show, :edit, :update, :destroy]

  def index
    @addresses = Address.all
  end

  def new
    @address = Address.new
  end

  def create
    address = Address.create(address_params)

    redirect_to address_path(address)
  end

  def show
     
  end

  def edit
    
  end

  def update
   
    @address.update(address_params)

    redirect_to address_path(@address)
  end

  def destroy
  
    @address.destroy

    redirect_to addresses_path
  end

  private

  def address_params
    params.require(:address).permit(:street_address, :city, :postal_code)
  end


  def current_address
    @address = Address.find(params[:id])
  end 

end
