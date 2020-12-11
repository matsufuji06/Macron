Rails.application.routes.draw do
  devise_for :users
  root  'top#index'
  resources :users, only: [:edit, :update]
  post '/top/guest_sign_in', to: 'top#new_guest'
end
