Rails.application.routes.draw do
  resources :songs, only: [:create, :update]

  root 'root#show'
end
