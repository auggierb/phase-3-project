class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Add your routes here
  get "/" do
    { message: "Good luck with your project!" }.to_json
  end
  get '/tasks' do 
    tasks = Task.all 
    tasks.to_json
  end
  post '/tasks' do 
    tasks = Task.create(
      username: params[:username],
      category: params[:category],
      task: params[:task_description]
    )
    
    tasks.to_json
  end
  delete '/tasks/:id' do
    tasks= Tasks.find(params[:id])
    tasks.destroy
    tasks.to_json
  end

  post '/users' do 
    user= User.create(
    username: params[:user]
    )
user.to_json
  end
  delete 'users/:id' do
    user= User.find(params[:id])
    user.destroy
    user.to_json
  end

end
