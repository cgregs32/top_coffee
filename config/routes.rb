Rails.application.routes.draw do
  namespace :api do
    resources :coffee, except: [:show]
  end

  get '*other', to: 'static#index'
end
