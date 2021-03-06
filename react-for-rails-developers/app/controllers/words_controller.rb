class WordsController < ApplicationController
    def index
      render json: Word.all
    end
  
    def create
      word = Word.create(word_params)
      render json: word
    end
    
    def show
        render json: Word.find(params[:id])
      end 
    def destroy
      Word.destroy(params[:id])
    end
  
    def update
      word = Word.find(params[:id])
      word.update_attributes(word_params)
      render json: word
    end
  
    private
  
    def word_params
      params.require(:word).permit(:id, :name)
    end
  end