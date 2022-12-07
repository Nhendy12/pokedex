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

bulb = Pokemon.new(name: "Bulbasaur")
bulb.image.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'pokemon-pics', 'bulbasuar.png')), filename: 'bulbasaur.png')
bulb.types << grass
bulb.types << poison
bulb.save
 
ivysaur = Pokemon.new(name: "Ivysaur")
ivysaur.image.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'pokemon-pics', 'ivysaur.png')), filename: 'ivysaur.png')
ivysaur.types << grass
ivysaur.types << poison
ivysaur.save

venusaur = Pokemon.new(name: "Venusaur")
venusaur.image.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'pokemon-pics', 'venusaur.png')), filename: 'venusaur.png')
venusaur.types << grass
venusaur.types << poison
venusaur.save

charmander = Pokemon.new(name: "Charmander")
charmander.image.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'pokemon-pics', 'charmander.png')), filename: 'charmander.png')
charmander.types << fire
charmander.save

charmeleon = Pokemon.new(name: "Charmeleon")
charmeleon.image.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'pokemon-pics', 'charmeleon.png')), filename: 'charmeleon.png')
charmeleon.types << fire
charmeleon.save

charizard = Pokemon.new(name: "Charizard")
charizard.image.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'pokemon-pics', 'charizard.png')), filename: 'charizard.png')
charizard.types << fire
charizard.types << flying
charizard.save

squirtle = Pokemon.new(name: "Squirtle")
squirtle.image.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'pokemon-pics', 'squirtle.png')), filename: 'squirtle.png')
squirtle.types << water
squirtle.save

wartortle = Pokemon.new(name: "Wartortle")
wartortle.image.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'pokemon-pics', 'wartortle.png')), filename: 'wartortle.png')
wartortle.types << water
wartortle.save

blastoise = Pokemon.new(name: "Blastoise")
blastoise.image.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'pokemon-pics', 'blastoise.png')), filename: 'blastoise.png')
blastoise.types << water
blastoise.save

caterpie = Pokemon.new(name: "Caterpie")
caterpie.image.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'pokemon-pics', 'caterpie.png')), filename: 'caterpie.png')
caterpie.types << bug
caterpie.save

metapod = Pokemon.new(name: "Metapod")
metapod.image.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'pokemon-pics', 'metapod.png')), filename: 'metapod.png')
metapod.types << bug
metapod.save

butterfree = Pokemon.new(name: "Butterfree")
butterfree.image.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'pokemon-pics', 'butterfree.png')), filename: 'butterfree.png')
butterfree.types << bug
butterfree.types << flying
butterfree.save