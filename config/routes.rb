Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'terms/index'
      post 'terms/create'
      delete '/destroy/:id', to: 'terms#destroy'
    end
  end
  root 'homepage#index'
  get '/*path' => 'homepage#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
