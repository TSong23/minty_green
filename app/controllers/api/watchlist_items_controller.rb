class Api::WatchlistItemsController < ApplicationController

  def index 
     @watchlist_items = WatchlistItem.where(watchlist_id: params[:listId] )
     if @watchlist_items
       render "api/watchlist_items/index"
     else
       render json: ["no item found"]
     end
  end

  def create
    @watchlist_item = WatchlistItem.new(watchlist_item_params)    
    if @watchlist_items.save
      render "api/watchlist_items/show"
    else
      render json: @watchlist_item.errors.full_messages, status: 422
    end
  end

  def destroy
    @watchlist_item = WatchlistItem.find(params[:id])

    if @watchlist_item.destroy
      render :show
    else
      render json: @watchlist_item.errors.full_messages, status: 422
    end
  end

  private
  def watchlist_item_params
    params.require(:watchlist_item).permit(:stock_id, :watchlist_id)
  end

end
