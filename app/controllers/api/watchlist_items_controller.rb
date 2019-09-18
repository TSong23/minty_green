class Api::WatchlistItemsController < ApplicationController

  def index 
     @watchlist_items = WatchlistItem.all
     if @watchlist_items
       render "api/watchlist/index"
     end
  end

  def new
    @watchlist_item = WatchlistItem.new(watchlist_item_params)    
    if @watchlist_item.save
      render "api/watchlist/index"
    else
      render json: @watchlist_item.errors.full_messages, status: 422
    end
  end

  def destroy
    @watchlist_item = WatchlistItem.find(params[:id])

    if @watchlist_item.destroy
      render :index
    else
      render json: @watchlist_item.errors.full_messages, status: 422
    end
  end

  private
  def watchlist_item_params
    params.require(:watchlist_item).permit(:stock_id, :watchlist_id)
  end

end
