class CreateJoinTablePlayersAttributes < ActiveRecord::Migration[6.0]
  def change
    create_join_table :players, :attributes do |t|
      # t.index [:player_id, :attribute_id]
      # t.index [:attribute_id, :player_id]
    end
  end
end
