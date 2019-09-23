Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'terms/index'
      resources :terms, only: [:new, :create, :destroy] do
        resources :translations, only: [:new, :create, :destroy]
      end
    end
  end
  root 'homepage#index'
  get '/*path' => 'homepage#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
