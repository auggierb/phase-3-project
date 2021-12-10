class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Add your routes here
  get "/tasks/:id" do
  tasks = Task.find_by(id:params[:id])
  tasks.to_json
  end
  get '/tasks' do 
    tasks = Task.all 
    tasks.to_json
  end
  post '/tasks' do 
    tasks = Task.create(
      username: params[:username],
      category: params[:category],
      task_description: params[:task_description]
    )
    tasks.to_json
  end
  delete '/tasks/:id' do
    tasks= Task.find_by(id:params[:id])
    tasks.destroy
    tasks.to_json
  end

  
  
  delete 'users/:id' do
    user= User.find(params[:id])
    user.destroy
    user.to_json
  end

end
