require 'rubygems'
require 'twilio-ruby'

account_sid = 'AC91eb02cd8430697b101e912196af22fa'
auth_token = 'aa6527cbd643af9faf189c62a2110424'
@client = Twilio::REST::Client.new(account_sid, auth_token)

message = @client.messages.create(
  body: 'Hi My name is Gabby ',
  from: '+18334542787',
  to: '+15165100428'
)

puts message.sid