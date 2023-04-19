module Api 
    class AuthController < ActionController::Base
        
        skip_before_action :verify_authenticity_token

        def index 
           json = JSON.parse(request.body.read)

           email = json['email']
           password = json['password']
        
           #user = variable 
           #find_by the users provided email they type into the login 
           #email: = column name you are searchig by 
           #email = the email the user signed up with 
           user = User.find_by(email: email)
        #    customer = Customer.find_by(user: user.id)
        #    courier = Courier.find_by(user: user)

           if  user.present? && user.valid_password?(password)
                # return render json: {success: true, user_id: user.id, customer_id: customer, courier_id: courier }, status: :ok

                customer = Customer.find_by(user_id: user.id)
                courier = Courier.find_by(user_id: user.id)

                if customer.present? && courier.present?
                    return render json: {success: true, customer_id: customer.id, user_id: user.id, courier_id: courier.id}, status: :ok
                elsif customer.present?
                    return render json: {success: true, customer_id: customer.id, user_id: user.id}, status: :ok
                elsif courier.present?
                    return render json: {success: true, user_id: user.id, courier_id: courier.id}, status: :ok
                else    
                    return render json: {success: true, user_id: user.id}, status: :ok
                end

           else
                return render json: {success: false }, status: :unauthorized  
           end

        end   

    end
end    