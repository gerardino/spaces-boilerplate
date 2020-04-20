Rails.application.routes.draw do
  require "devise_token_auth"

  mount_devise_token_auth_for 'User', at: 'auth', controllers: {
    omniauth_callbacks: "overrides/omniauth_callbacks",
  }
  resources :spaces
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  root to: 'home#index'
end
