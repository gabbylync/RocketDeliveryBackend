module Api 
    class OrdersController < ActionController::Base
        skip_before_action :verify_authenticity_token
        def status #this is for updating order by id 

            #set status and id from params
            status = params[:status]
            id = params[:id]
            
            unless status.in?(["pending", "in progress", "delivered"])
                return render json: { success: false }, status: :unprocessable_entity
            end 

            order = Order.find_by(id: id) 
            if order == nil
                return render json: {error: "invalid order ID" }, status: :unprocessable_entity
            end
            order_status = OrderStatus.find_by(name: status)

            order.order_status_id = order_status.id
            order.save
            return render json: {success: true }, status: :ok
        
         end   

        # def index #this is for getting all of the orders
        #      user_type = params[:customer, :restaurant, :courier]
        #      user_id = params[:cusotmer_id, :restaurant_id, :courier_id]

        #      @restaurants = Restaurant.all


        # end 
 
        
    end
end   