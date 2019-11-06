class Api::DepositsController < ApplicationController
  def create
    @deposit = Deposit.new(deposit_params)
    @deposit.user_id = current_user.id
    if @deposit.save
      @user = current_user
      render 'api/users/show'
    else
      render json: @deposit.full_messages, status: 422
    end
  end

  private
  def deposit_params
    params.require(:deposit).permit(:amount)
  end

end
