class Api::PokemonController < ApplicationController
  before_action :set_pokemon, only: %i[ update ]

  include Pagy::Backend

  # GET /pokemon
  def index
    pokemon = Pokemon.all
    if params["page"].present?
      page_number = params["page"] 
    else
      page_number = 1
    end

    @pagy, @pokemon = pagy(pokemon, page: page_number, items:20)

    render json: { data: @pokemon.as_json(include: [:image, :types => {only: ['name', 'id']}], methods: [:image_url]), 
                  pagy: pagy_metadata(@pagy) }
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
