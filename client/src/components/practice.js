def index #this is for getting all of the orders
type = params[:type]
id = params[:id]

#if type not present 
unless type.present? && id.present? 
   return render json: {error: "Both 'user type' and 'id' parameters are required" }, status: :bad_request
end   
#422 error: if user type is invalid
unless type.in?(["customer", "restaurant", "courier"])
   return render json: {error: "Invalid user type" }, status: :unprocessable_entity
end
#200 : send back empty array if no id found (calling orders model here)
orders = Order.user_orders(type, id)
render json: orders.map(&method(:format)), status: :ok

end 