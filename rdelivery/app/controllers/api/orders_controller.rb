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

        def index #this is for getting all of the orders
             type = params[:type]
             id = params[:id]

            #if type present 
             unless type.present? && id.present? 
                return render json: {error: "Both 'user type' and 'id' parameters are required" }, status: :bad_request
             end   
            #422 error: if user type is invalid
            unless type.in?(["customer", "restaurant", "courier"])
                return render json: {error: "Invalid user type" }, status: :unprocessable_entity
            end
            #200 error: send back empty array if no id found (calling orders model here)
            orders = Order.user_orders(type, id)
            render json: orders.map(&method(:format)), status: :ok
           
        end 

        private 

        def format(order) 
            {
                id: order.id,
                customer_id: order.customer.id,
                customer_name: order.customer.user.name,
                customer_address: order.customer.address.street_address,
                restaurant_id: order.restaurant.id,
                restaurant_name: order.restaurant.name,
                restaurant_address: order.restaurant.address.street_address, 
                courier_id: order.courier&.id,
                courier_name: order.courier&.user&.name,
                status: order.order_status.name,
            
                products: order.product_orders.map do |po| 
                { 
                    product_id: po.product.id, 
                    product_name: po.product.name,
                    product_quantity: po.product_quantity,
                    unit_cost: po.product_unit_cost,
                    total_cost: po.product_quantity * po.product_unit_cost

                }
                end,
        
                total_cost: order.total_cost
            }
        end
    end
        

end   