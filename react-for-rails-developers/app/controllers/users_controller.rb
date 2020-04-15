class UsersController < ApplicationController
    def index
      render json: User.all
    end
    
    def create
      @user = User.create(params.require(:user).permit(:username,        
      :password))
      session[:user_id] = @user.id
      redirect_to '/home'
    end
    def new 
      @user = User.new
    end 
    def show
      render json: User.find(params[:id])
    end
  
    def destroy
     

      session[:user_id] = nil
      redirect_to '/'
    end
  
    def update
      post = User.find(params[:id])
      post.update_attributes(word_params)
      render json: post
    end
  
    private
  
    def word_params
      params.require(:post).permit(:id, :username, :password_digest)
    end
  end