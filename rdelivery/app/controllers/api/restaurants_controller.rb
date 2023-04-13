module Api 
    class RestaurantsController < ActionController::Base
        def index
            #set rating and price_range from params 

            rating = params[:rating]
            price_range = params[:price_range]

            # we set @restaurants to be all restaurants at first
            # if no further parameters are give we will just return them all
            @restaurants = Restaurant.all

            #if price_range and rating is given
            if price_range.present? && rating.present?

                 #check if rating and price are in correct range
                if (1..5).include?(rating.to_i) && (1..3).include?(price_range.to_i)
                    # if rating and price are included, we use our method from the model
                    # to select only restaurants where rating and price match
                    # and we set that equal to @restaurants
                    @restaurants = Restaurant.rating_and_price(rating, price_range)
                else
                    #if rating and price are out of range we send 422 error
                    return render json: {error: "Invalid rating or price range" }, status: :unprocessable_entity
                end
            end

            render json: @restaurants, status: :ok

        end   
    end
end    