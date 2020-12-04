class RenameTableAndColumn < ActiveRecord::Migration[6.0]
  def change
    rename_table :attributes_players, :skills_players
    rename_column :skills_players, :attribute_id, :skill_id
  end
end
