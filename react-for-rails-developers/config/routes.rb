Rails.application.routes.draw do
 
  root 'sessions#welcome'

  get 'home', to: 'pages#index'
  
  get 'login', to: 'sessions#new'
   post 'login', to: 'sessions#create'
   get 'welcome', to: 'sessions#welcome'
  
 
 
resources :posts, :users, :words, :sessions
end
