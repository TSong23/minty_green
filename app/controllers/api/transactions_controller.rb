class Api::TransactionsController < ApplicationController
  
  def create 
    @transaction = Transaction.new(transaction_params)
    @transaction.user_id = current_user.id
    if @transaction.save
      @user = current_user
      render 'api/users/show'
    else
      render json: @transaction.errors.full_messages, status: 422
    end
  end

  def index
    @transactions = current_user.transactions
  end

  private

  def transaction_params
    params.require(:transaction).permit(:stock_id, :num_shares, :price, :order_type)
  end
end
