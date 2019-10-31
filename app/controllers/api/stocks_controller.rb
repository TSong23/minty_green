class Api::StocksController < ApplicationController
  def index
    @stocks = Stock.all
  end


  def show
    @stock = Stock.find_by(ticker: params[:ticker])

    if @stock
      render "api/stocks/show"
    end

  end

  private

  def stock_params
    params.require(:stock).permit(:id, :ticker)
  end
end
