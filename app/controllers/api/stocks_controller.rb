class Api::StocksController < ApplicationController
  def index
    @stocks = Stock.all

  end

  def show
    @stock = Stock.find(params[:ticker])
  end

  private

  def stock_params
    params.require(:stock).permit(:ticker)
  end
end
