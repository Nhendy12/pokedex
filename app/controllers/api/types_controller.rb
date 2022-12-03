class Api::TypesController < ApplicationController
  # GET /types
  def index
    @types = Type.all

    render json: @types
  end

  private
    # Only allow a list of trusted parameters through.
    def type_params
      params.require(:type).permit(:name)
    end
end
