# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Player.destroy_all
Skill.destroy_all
User.destroy_all

@admin = User.create!(username: 'admin', email: 'admin@email.com', password:'123456')

puts "#{User.count} users created"

@skill1 = Skill.create!(name: "Fast")
@skill2 = Skill.create!(name: "Explosive")
@skill3 = Skill.create!(name: "Long-Range")
@skill4 = Skill.create!(name: "Mid-Range")
@skill5 = Skill.create!(name: "Post-Player")
@skill6 = Skill.create!(name: "Long")
@skill7 = Skill.create!(name: "Short")
@skill8 = Skill.create!(name: "Handles")
@skill9 = Skill.create!(name: "Footwork")
@skill10 = Skill.create!(name: "Court Vision")
@skill11 = Skill.create!(name: "Leader")
@skill12 = Skill.create!(name: "Play Maker")
@skill13 = Skill.create!(name: "Gritty")
@skill514 = Skill.create!(name: "Powerful")
@skill515 = Skill.create!(name: "Clutch")

puts "#{Skill.count} skills created"


@player1 = Player.create!(name: "Stephen Curry", skills: [@skill3, @skill8, @skill12], user: @admin)

@player2 = Player.create!(name: "LeBron James", skills: [@skill2, @skill10, @skill11], user: @admin)

puts "#{Player.count} players created"
