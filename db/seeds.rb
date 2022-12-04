# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).

#initialize types

normal = Type.create(name: "normal")
fire = Type.create(name: "fire")
water = Type.create(name: "water")
grass = Type.create(name: "grass")
electric = Type.create(name: "electric")
ice = Type.create(name: "ice")
fighting = Type.create(name: "fighting")
poison = Type.create(name: "poison")
ground = Type.create(name: "ground")
flying = Type.create(name: "flying")
psychic = Type.create(name: "psychic")
bug = Type.create(name: "bug")
rock = Type.create(name: "rock")
ghost = Type.create(name: "ghost")
dark = Type.create(name: "dark")
dragon = Type.create(name: "dragon")
steel = Type.create(name: "steel")
fairy = Type.create(name: "fairy")

#create Pokemon
bulb = Pokemon.new(name: "Bulbasur")
bulb.types << grass
bulb.types << poison
bulb.save