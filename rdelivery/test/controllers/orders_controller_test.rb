class OrdersControllerTest < ActionDispatch::IntegrationTest

  def setup
    user = User.create!(name: "User 1", email: "test@test.com", password: "password")
    address = Address.create!(street_address: "Street 1", city: "City 1", postal_code: "11111")
    restaurant = Restaurant.create!(user: user, address: address, name: "Restaurant 1", phone: "123456", price_range: 2)
    customer = Customer.create!(user: user, address: address, phone: "123456")
    product = Product.create!(name: "Product 1", cost: 10, restaurant: restaurant)
    order_status = OrderStatus.create(name: "pending")
    OrderStatus.create(name: "in progress")
    OrderStatus.create(name: "delivered")
    @order = Order.create!(restaurant: restaurant, customer: customer, order_status: order_status, restaurant_rating: 4)
  end

  test "update order status to 'pending'" do
    post "/api/order/#{@order.id}/status", params: { status: "pending" }
    assert_response :success
    assert_equal "pending", @order.reload.order_status.name
  end

  test "update order status to 'in progress'" do
    post "/api/order/#{@order.id}/status", params: { status: "in progress" }
    assert_response :success
    assert_equal "in progress", @order.reload.order_status.name
  end

  test "update order status to 'delivered'" do
    post "/api/order/#{@order.id}/status", params: { status: "delivered" }
    assert_response :success
    assert_equal "delivered", @order.reload.order_status.name
  end

  test "return 422 error for invalid status" do
    post "/api/order/#{@order.id}/status", params: { status: "invalid" }
    assert_response 422
  end

  test "return 422 error for invalid order" do
    post "/api/order/0/status", params: { status: "pending" }
    assert_response 422
  end

  ###################
  # GET route testing #
  ####################
  test "orders route exists and is a GET route" do
    assert_routing({ path: '/api/orders', method: :get }, { controller: 'api/orders', action: 'index' })
  end

  test "get orders with customer parameter" do
    Product.delete_all
    Order.delete_all
    OrderStatus.delete_all
    Customer.delete_all
    Restaurant.delete_all
    Address.delete_all
    User.delete_all

    user = User.create!(name: "User 1", email: "test2@test.com", password: "password")
    address = Address.create!(street_address: "Street 1", city: "City 1", postal_code: "11111")
    restaurant = Restaurant.create!(user: user, address: address, name: "Restaurant 1", phone: "123456", price_range: 2)
    customer = Customer.create!(user: user, address: address, phone: "123456")
    product = Product.create!(name: "Product 1", cost: 10, restaurant: restaurant)
    product2 = Product.create!(name: "Product 2", cost: 15, restaurant: restaurant)
    order_status = OrderStatus.create!(name: "pending")
    order = Order.create!(restaurant: restaurant, customer: customer, order_status: order_status, restaurant_rating: 4)
    product_order = ProductOrder.create!(product: product, order: order, product_quantity: 2, product_unit_cost: 300)
    product_order2 = ProductOrder.create!(product: product2, order: order, product_quantity: 1, product_unit_cost: 150)
    courier_status = CourierStatus.create!(name: "busy")
    courier = Courier.create!(phone: "123456", email: "test@test.com", active: 1, user: user, address: address, courier_status: courier_status)
    

    get "/api/orders", params: { type: "customer", id: 1 }
    assert_response :success
    assert_equal [{ id: order.id, customer_id: customer.id, customer_name: customer.user.name, customer_address: customer.address.street_address, 
      restaurant_id: restaurant.id, restaurant_name: restaurant.name, restaurant_address: restaurant.address.street_address, 
      courier_id: order.courier&.id, courier_name: order.courier&.user&.name,
       status: order_status.name, 
      products: [
      {product_id: product.id, product_name: product.name, product_quantity: product_order.product_quantity,
      unit_cost: product_order.product_unit_cost, total_cost: product_order.product_quantity * product_order.product_unit_cost},
      {product_id: product2.id, product_name: product2.name, product_quantity: product_order2.product_quantity,
      unit_cost: product_order2.product_unit_cost, total_cost: product_order2.product_quantity * product_order2.product_unit_cost}
       ], total_cost: order.total_cost }].to_json, response.body

    
  end

  test "get orders with restaurant parameter" do
    Product.delete_all
    Order.delete_all
    OrderStatus.delete_all
    Customer.delete_all
    Restaurant.delete_all
    Address.delete_all
    User.delete_all

    user = User.create!(name: "User 1", email: "test2@test.com", password: "password")
    address = Address.create!(street_address: "Street 1", city: "City 1", postal_code: "11111")
    restaurant = Restaurant.create!(user: user, address: address, name: "Restaurant 1", phone: "123456", price_range: 2)
    customer = Customer.create!(user: user, address: address, phone: "123456")
    product = Product.create!(name: "Product 1", cost: 10, restaurant: restaurant)
    product2 = Product.create!(name: "Product 2", cost: 15, restaurant: restaurant)
    order_status = OrderStatus.create!(name: "pending")
    order = Order.create!(restaurant: restaurant, customer: customer, order_status: order_status, restaurant_rating: 4)
    product_order = ProductOrder.create!(product: product, order: order, product_quantity: 2, product_unit_cost: 300)
    product_order2 = ProductOrder.create!(product: product2, order: order, product_quantity: 1, product_unit_cost: 150)
    courier_status = CourierStatus.create!(name: "busy")
    courier = Courier.create!(phone: "123456", email: "test@test.com", active: 1, user: user, address: address, courier_status: courier_status)
    

    get "/api/orders", params: { type: "restaurant", id: 1 }
    assert_response :success
    assert_equal [{ id: order.id, customer_id: customer.id, customer_name: customer.user.name, customer_address: customer.address.street_address, 
      restaurant_id: restaurant.id, restaurant_name: restaurant.name, restaurant_address: restaurant.address.street_address, 
      courier_id: order.courier&.id, courier_name: order.courier&.user&.name,
       status: order_status.name, 
      products: [
      {product_id: product.id, product_name: product.name, product_quantity: product_order.product_quantity,
      unit_cost: product_order.product_unit_cost, total_cost: product_order.product_quantity * product_order.product_unit_cost},
      {product_id: product2.id, product_name: product2.name, product_quantity: product_order2.product_quantity,
      unit_cost: product_order2.product_unit_cost, total_cost: product_order2.product_quantity * product_order2.product_unit_cost}
       ], total_cost: order.total_cost }].to_json, response.body

    
  end

  test "get orders with courier parameter" do
    Product.delete_all
    Order.delete_all
    OrderStatus.delete_all
    Customer.delete_all
    Restaurant.delete_all
    Address.delete_all
    User.delete_all

    user = User.create!(name: "User 1", email: "test2@test.com", password: "password")
    address = Address.create!(street_address: "Street 1", city: "City 1", postal_code: "11111")
    restaurant = Restaurant.create!(user: user, address: address, name: "Restaurant 1", phone: "123456", price_range: 2)
    customer = Customer.create!(user: user, address: address, phone: "123456")
    product = Product.create!(name: "Product 1", cost: 10, restaurant: restaurant)
    product2 = Product.create!(name: "Product 2", cost: 15, restaurant: restaurant)
    order_status = OrderStatus.create!(name: "pending")
    courier_status = CourierStatus.create!(name: "busy")
    courier = Courier.create!(phone: "123456", email: "test@test.com", active: 1, user: user, address: address, courier_status: courier_status)
    order = Order.create!(restaurant: restaurant, customer: customer, order_status: order_status, restaurant_rating: 4, courier: courier)
    product_order = ProductOrder.create!(product: product, order: order, product_quantity: 2, product_unit_cost: 300)
    product_order2 = ProductOrder.create!(product: product2, order: order, product_quantity: 1, product_unit_cost: 150)

    get "/api/orders", params: { type: "courier", id: 1 }
    assert_response :success
    assert_equal [{ id: order.id, customer_id: customer.id, customer_name: customer.user.name, customer_address: customer.address.street_address, 
      restaurant_id: restaurant.id, restaurant_name: restaurant.name, restaurant_address: restaurant.address.street_address, 
      courier_id: order.courier&.id, courier_name: order.courier&.user&.name,
       status: order_status.name, 
      products: [
      {product_id: product.id, product_name: product.name, product_quantity: product_order.product_quantity,
      unit_cost: product_order.product_unit_cost, total_cost: product_order.product_quantity * product_order.product_unit_cost},
      {product_id: product2.id, product_name: product2.name, product_quantity: product_order2.product_quantity,
      unit_cost: product_order2.product_unit_cost, total_cost: product_order2.product_quantity * product_order2.product_unit_cost}
       ], total_cost: order.total_cost }].to_json, response.body

    
  end

  test "return 422 if user type is invalid" do
    get "/api/orders", params: { type: "employee", id: 1 }
    assert_response 422
    assert_equal({ error: "Invalid user type" }.to_json, response.body)
  end
  
  test "return 200 and empty array if no id found" do
    get "/api/orders", params: { type: "customer", id: 999 }
    assert_response 200
    assert_equal([].to_json, response.body)
  end

  test "return 400 if error user type or id parameters are missing" do
    get "/api/orders", params: { type: "customer" }
    assert_response 400
    assert_equal({ error: "Both 'user type' and 'id' parameters are required" }.to_json, response.body)
  end



   ###################
  # POST route testing #
   ####################

test "create order " do
  assert_routing({ path: '/api/order', method: :post }, { controller: 'api/orders', action: 'create' })
end


test "post with valid credentials" do
  user = User.create!(name: "User 3", email: "test3@test.com", password: "password")
  address = Address.create!(street_address: "Street 10", city: "City 1", postal_code: "11111")
  restaurant = Restaurant.create!(user: user, address: address, name: "Restaurant 3", phone: "1234567", price_range: 2)
  customer = Customer.create!(user: user, address: address, phone: "1234567")
  product = Product.create!(name: "Product 10", cost: 11, restaurant: restaurant)
  product2 = Product.create!(name: "Product 20", cost: 16, restaurant: restaurant)
  order_status = OrderStatus.create!(name: "delivered")

  post "/api/order", headers: { "Content-Type": "application/json" }, params: { 
  restaurant: restaurant.id, 
  customer: customer.id,
  order_status: order_status.id}.to_json
  assert_response 200
  # assert_equal({ success: true }.to_json, response.body)
end


test "post auth " do
  post "/api/login", headers: { "Content-Type": "application/json" }, params: { email: 'test@test.com', password: 'bad_password' }.to_json
  assert_response :unauthorized
  assert_equal({ success: false }.to_json, response.body)
end

end







