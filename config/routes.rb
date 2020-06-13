# frozen_string_literal: true

require 'devise_token_auth'

Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'auth', controllers: {
    omniauth_callbacks: 'overrides/omniauth_callbacks'
  }
  resources :spaces, constraints: ->(req) { req.format == :json }
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  # resources :spaces, to: 'home#application'

  get '/app', to: 'home#application'

  root to: 'home#frontpage'
end
