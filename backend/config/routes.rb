Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :users, only: [:create, :show]

  post '/login', to: 'auth#create'
  get '/profile', to: 'users#profile'

  resources :journal_entries, only: [:create, :show, :update, :destroy]

  #current_user.journal_entries.create([params])
  #for show make sure that user can only see its own entries....same with update and destroy
  resources :tags, only: [:index, :show]
  #the user should only see their journalentries for tags show
  #index consider if show all tags or just user tags
end
