module Api
  module V1
    class CommunitiesController < ApplicationController
      def index
        communities = Community.order(updated_at: :desc)
        render json: community
      end
    
      def show
        community = Community.find(params[:id])
        render json: community
      end
    
      def create
        community = current_user.communities.new(community_params)
        if community.save
          render json: community
        else
          render json: community.errors, status: 422
        end
      end
    
      def update
        community = current_user.communities.find(params[:id])
        if community.update(community_params)
          render json: community
        else
          render json: community.errors, status: 422
        end
      end
    
      def destroy
        community = current_user.communities.find(params[:id])
        if community.destroy
          head :no_content, status: :ok
        else
          render json: community.errors, status: :422
        end
    
      private
    
      def community_params
        params[:community].permit(:name, :description, :image)
      end
    end
  end
end