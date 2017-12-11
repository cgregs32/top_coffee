Rails.application.routes.draw do
  namespace :api do
    resources :coffees, except: [:show]
  end

  get '*other', to: 'static#index'
end
