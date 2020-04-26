class ApplicationControllerApi < ActionController::API
  include DeviseTokenAuth::Concerns::SetUserByToken
end
