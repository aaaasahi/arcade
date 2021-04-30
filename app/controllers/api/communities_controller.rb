class Api::CommunitiesController < ApplicationController
  before_action :authenticate_user!, only: [:create, :update, :delete]

  def index
    communities = Community.order(updated_at: :desc)
    render json: communities
  end

  def show
    community = Community.find(params[:id])
    render json: community
  end

  def create
    community =  current_user.communities.create!(community_params)
    render json: community
  end

  def update
    community = current_user.communities.find(params[:id]) 
    community.update!(community_params)
    render json: community
  end

  def destroy
    community = current_user.communities.find(params[:id])
    community.destroy!
    render json: community
  end

  private

  def community_params
    params.require(:community).permit(:name, :description, :image).merge(user: current_user)
  end
end
