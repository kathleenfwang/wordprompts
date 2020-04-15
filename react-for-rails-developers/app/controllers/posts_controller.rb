class PostsController < ApplicationController
    def index
      render json: Post.all
    end

    def show
        
      @post = Post.find(params[:id])
        
      end
    
      def new 
        @post = Post.new
      end 
    def create
      @post= Post.create(word_params)
      session[:post_id] = @post.id
      

      if @post.save 
        flash[:success] = "Post successfully created"
        redirect_to '/home'
      else 
        render 'new'
      end 
      
     
    end
  
    def destroy
      @post = Post.find(params[:id]).destroy
      
  
      redirect_to '/home'
    end
  
    def edit
     @post = Post.find(params[:id])
    end
    def update
      url = '/posts/' + params[:id]
      @post = Post.find(params[:id]).update(word_params)
      flash[:notice] = "Post Successfully Updated"
     
      redirect_to url
     end
  
    private
  
    def word_params
      params.require(:post).permit(:id, :title, :description, :user_id)
    end
  end