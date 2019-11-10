class Api::WatchlistsController < ApplicationController
  
  def index
    @watchlists = current_user.watchlists
  end

  def create
    @watchlist = Watchlist.new(watchlist_params) 
    @watchlist.user_id = current_user.id   
    if @watchlist.save
      @watchlists = current_user.watchlists
      render :index
    else
      render json: @watchlist.errors.full_messages, status: 422
    end
  end

  # def show
  #   @watchlist = Watchlist.find_by(id: params[:id]);
  #   if @watchlist
  #     render "api/watchlists/show"
  #   else
  #     render json: ["Watchlist does not exist"], status: 404
  #   end
  # end


  # def update
  #   @watchlist = Watchlist.find(params[:id])

  #   if @watchlist.update(watchlist_params)
  #     render :show
  #   else
  #     render json: @watchlist.errors.full_messages, status: 422
  #   end
  # end



  def destroy
    @watchlist = Watchlist.find(params[:id])

    if @watchlist.destroy
      @watchlists = current_user.watchlists
      render :index
    else
      render json: @watchlist.errors.full_messages, status: 422
    end
  end

  private 

  def watchlist_params
    params.require(:watchlist).permit(:stock_id)
  end

end
