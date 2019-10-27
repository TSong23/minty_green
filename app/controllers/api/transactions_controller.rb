class Api::TransactionsController < ApplicationController
  def create 
    @transaction = Transaction.new(transaction_params)
    @transaction.user_id = current_user.id
    if @transaction.save
      render json: ['Purchase Success!'], status: 200
    else
      render json: @transaction.errors.full_messages, status: 422
    end
  end

  private

  def transaction_params
    params.require(:transaction).permit(:stock_id, :num_shares, :price, :order_type)
  end
end
