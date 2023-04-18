class ApiControllerTest < ActionDispatch::IntegrationTest

  test "login route exists and is a POST route" do
    assert_routing({ path: '/api/login', method: :post }, { controller: 'api/auth', action: 'index' })
  end

  test "post auth with valid credentials" do
    user = User.create(email: 'test@test.com', password: 'good_password', name: "user 1")
    address = Address.create!(street_address: "Street 1", city: "City 1", postal_code: "11111")
    restaurant = Restaurant.create!(user: user, address: address, name: "Restaurant 1", phone: "123456", price_range: 2)
    customer = Customer.create!(user: user, address: address, phone: "123456")
    product = Product.create!(name: "Product 1", cost: 10, restaurant: restaurant)
    product2 = Product.create!(name: "Product 2", cost: 15, restaurant: restaurant)
    order_status = OrderStatus.create!(name: "pending")
    courier_status = CourierStatus.create!(name: "busy")
    courier = Courier.create!(phone: "123456", email: "test@test.com", active: 1, user: user, address: address, courier_status: courier_status)

  
    post "/api/login", headers: { "Content-Type": "application/json" }, params: { email: 'test@test.com', password: 'good_password' }.to_json
    assert_response :success
    assert_equal({ success: true, user_id: user.id, customer_id: customer.id}.to_json, response.body)
  end

  test "post auth with invalid credentials" do
    post "/api/login", headers: { "Content-Type": "application/json" }, params: { email: 'test@test.com', password: 'bad_password' }.to_json
    assert_response :unauthorized
    assert_equal({ success: false }.to_json, response.body)
  end

end