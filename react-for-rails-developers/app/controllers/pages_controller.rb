class PagesController < ApplicationController
  def index
  end

  def posts
    @posts = Post.all 
    render json: {data: @posts}
  end
end
