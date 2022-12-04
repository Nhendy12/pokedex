class Api::PokemonController < ApplicationController
  before_action :set_pokemon, only: %i[ update ]

  # GET /pokemon
  def index
    @pokemon = Pokemon.all

    render json: @pokemon
  end

  # POST /pokemon
  def create
    @pokemon = Pokemon.new(pokemon_params)
    #add types to pokemon
    #@pokemon.types << @type
    if @pokemon.save
      render json: @pokemon, status: :created, location: @pokemon
    else
      render json: @pokemon.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /pokemon/1
  def update
    if @pokemon.update(pokemon_params)
      render json: @pokemon
    else
      render json: @pokemon.errors, status: :unprocessable_entity
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_pokemon
      @pokemon = Pokemon.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def pokemon_params
      params.require(:pokemon).permit(:name)
    end
end
