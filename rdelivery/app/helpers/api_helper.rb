module ApiHelper
    require 'twilio-ruby'

    # def send_sms(customer_number, customer_name, order_id)
    def send_sms(customer_name)
        account_sid = 'AC91eb02cd8430697b101e912196af22fa'
        auth_token = 'aa6527cbd643af9faf189c62a2110424'
        @client = Twilio::REST::Client.new(account_sid, auth_token)

        message = @client.messages.create(
        body: "Hi thank you for your order, #{customer_name}. You're Order ID is 7. We stand true to our motto:
         food so good, the courier might eat it before it gets to you 👍",
        from: '+18334542787',
        to: '+15165100428'
        # to: "#{customer_phone}"
        )

        puts message.sid
    end


end