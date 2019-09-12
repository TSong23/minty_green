class Api::WatchlistItemsController < ApplicationController

  def new

  end

  private
  def watchlist_item_params
    params.require(:watchlist_item).permit(:stock_id, :watchlist_id)
  end

end
