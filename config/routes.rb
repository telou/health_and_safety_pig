Rails.application.routes.draw do
  root 'homepage#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :terms do
    resources :translations, only: [:new, :create, :destroy]
  end
end
