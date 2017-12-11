class Api::CoffeesController < ApplicationController
  before_action :set_coffee, except: [:index, :create]

  def index
    render json: Coffee.all
  end

  def create
    coffee = Coffee.new(coffee_params)
    if coffee.save
      render json: coffee
    else
      render json: {errors: coffee.errors}, status: 422
    end
  end

  def update
    if @coffee.update(coffee_params)
      render json: coffee
    else
      render json: {errors: coffee.error}, status: 422
    end
  end

  def destroy
    @coffee.destroy
  end

  private

    def coffee_params
      params.require(:coffee).permit(:blend, :flavor, :origin, :variety)
    end

    def set_coffee
      @coffee = Coffee.find(params[:id])
    end
end
