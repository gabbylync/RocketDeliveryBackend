# app/services/notify_eu_service.rb
require 'httparty'

class NotifyEuService
  include HTTParty
  base_uri 'https://api.notify.eu'

  def initialize(api_key)
    @options = {
      headers: {
        'Authorization' => "Bearer #{api_key}",
        'Content-Type' => 'application/json'
      }
    }
  end

  def send_email(subject, body, to)
    email_data = {
      "subject" => subject,
      "body" => body,
      "to" => to
    }
    self.class.post('/emails', @options.merge(body: email_data.to_json))
  end
end