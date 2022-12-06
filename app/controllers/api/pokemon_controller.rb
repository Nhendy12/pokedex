class Api::PokemonController < ApplicationController
  before_action :set_pokemon, only: %i[ update ]

  # GET /pokemon
  def index
    @pokemon = Pokemon.all

    render json: @pokemon, include: [:image, :types => {only: ['name', 'id']}], methods: [:image_url]
  end

  # POST /pokemon
  def create
    @pokemon = Pokemon.new(name: pokemon_params['name'], image: pokemon_params['image'])
    types = JSON.parse(pokemon_params['types'])
    #add types to pokemon
    types.each { |type| 
      @type = Type.find(type['value'].to_i)
      @pokemon.types << @type
    }
    if @pokemon.save
      render json: @pokemon, status: :created
    else
      render json: @pokemon.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /pokemon/1
  def update
    if pokemon_params['types'].length > 2
      types = JSON.parse(pokemon_params['types'])
      @pokemon.types.delete_all
      types.each { |type| 
        @type = Type.find(type['value'].to_i)
        @pokemon.types << @type
      }
    end

    if pokemon_params['image'] != 'undefined' && !pokemon_params['image'].nil?
      update_params = {"name"=> pokemon_params['name'], 'image': pokemon_params['image']}
    else
      update_params = {"name"=> pokemon_params['name']}
    end

    if @pokemon.update(update_params)
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
      params.require(:pokemon).permit(:name, :image, :types)
    end
end
