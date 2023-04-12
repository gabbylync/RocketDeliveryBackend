module Api 
    class RestaurantsController < ActionController::Base
        def index 
    #set rating and price_range from params 
        # Rating is found in the order model and price_range in the restaurant model
                rating = params[:order]
                price_range = params[:restaurant]

    #if price_range and rating is given
                if price_range.present? && rating.present?
    #find a restaurant using price_range and rating 
                    restaurant = Restaurant.find_by(:rating, :price_range )
     #if certain parameters 
                    if rating == 4 && price_range == 4 || rating == 6 && price_range == 2 
                        return render json: {error: "Invalid rating or price range" }, status: :unprocessable_entity
                    end
    #otherwise find all restaurants with given rating and price_range and only
    #return specified fields (select_short)
                    @products = restaurant.products.select_short
                else 
    #if no parameters given                  
                     @restaurants = Restaurant.all
                end
                render json: @restaurants, status: :ok

        end   
    end
end    