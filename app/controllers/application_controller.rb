class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  before_action :configre_permitted_parameters, if: :devise_controller?

  def configre_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:team_name, :last_name, :first_name, :last_name_kana, :first_name_kana, :phone_number, :birthday])
  end
end

