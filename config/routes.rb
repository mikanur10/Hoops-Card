Rails.application.routes.draw do
  resources :skills
  resources :players
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  resources :users, only: :create
  get '/players/:skill_id/players/:id', to: 'players#add_skill'

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
