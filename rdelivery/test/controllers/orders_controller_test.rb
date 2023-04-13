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

  test "get orders with valid parameters" do
    user = User.create!(name: "User 1", email: "test2@test.com", password: "password")
    address = Address.create!(street_address: "Street 1", city: "City 1", postal_code: "11111")
    restaurant = Restaurant.create!(user: user, address: address, name: "Restaurant 1", phone: "123456", price_range: 2)
    customer = Customer.create!(user: user, address: address, phone: "123456")
    product = Product.create!(name: "Product 1", cost: 10, restaurant: restaurant)
    order_status = OrderStatus.create!(name: "Order Status 1")
    order = Order.create!(restaurant: restaurant, customer: customer, order_status: order_status, restaurant_rating: 4)
    product_order = ProductOrder.create!(product: product, order: order, product_quantity: 2, product_unit_cost: 300)
    courier_status = CourierStatus.create!(name: "Courier Status 1")
    courier = Courier.create!(phone: "123456", email: "test@test.com", active: 1, user: user, address: address, courier_status: courier_status)
    

    get "/api/orders", params: { type: "customer", id: customer.id }
    assert_response :success
    assert_not_nil @controller.instance_variable_get(:@orders)
    assert_equal [{restaurant_id: restaurant_id, restaurant_name: restaurant.name, address: restaurant.address, 
      courier_id: courier_id, courier_name: courier.name, courier_status: courier_status, product_id: product.id, 
      product_name: product.name, product_quantity: product.quantity  }].to_json, response.body
  end


  test "return 422 error for invalid user type" do
    post "/api/order", params: { type: "Invalid User type" }
    assert_response 422
  end

end