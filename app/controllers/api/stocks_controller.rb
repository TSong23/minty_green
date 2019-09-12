class Api::StocksController < ApplicationController
  def index
    @stocks = Stock.all
  end

  def new
    @stock = Stock.new(stock_params)
    if @stock.save 
      render :show
    else
      render json: @stock.errors.full_messages, status: 422
    end
  end

  def show
    @stock = Stock.find(params[:ticker])
  end

  private

  def stock_params
    params.require(:stock).permit(:ticker)
  end
end
