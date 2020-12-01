class RenameTable < ActiveRecord::Migration[6.0]
  def change
    rename_table :skills_players, :players_skills
  end
end
