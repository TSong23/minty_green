class Api::StocksController < ApplicationController
  def index
    @stocks = Stock.all
  end


  def show
    @stock = Stock.find_by(ticker: params[:id])

    if @stock
      render "api/stocks/show"
    end

  end

  private

  def stock_params
    params.require(:stock).permit(:ticker)
  end
end
