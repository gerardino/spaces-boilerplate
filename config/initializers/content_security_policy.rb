Rails.application.config.content_security_policy do |policy|
  policy.script_src :self, :https

  if Rails.env.development? || Rails.env.test?
    policy.connect_src :self, :https, 'http://localhost:3035', 'ws://localhost:3035'
  end
end