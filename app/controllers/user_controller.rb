# frozen_string_literal: true

class UserController < ApplicationControllerApi
  before_action :authenticate_user!

  def frontend_user
    { name: current_user.name, email: current_user.email, image: current_user.image }
  end

  def current
    render json: frontend_user
  end
end
