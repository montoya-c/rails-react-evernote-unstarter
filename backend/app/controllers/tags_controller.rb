class TagsController < ApplicationController

  before_action :current_tag, only[:show]

  def index
    render json: Tag.all
  end

  def show
    render json: current_tag
  end

  private
  def current_tag
    Tag.find(params[:id])
  end

  def tag_params
      params.require(:tag).permit(:name)
    end

end
