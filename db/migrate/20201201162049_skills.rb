class Skills < ActiveRecord::Migration[6.0]
  def change
    rename_table :attributes, :skills
  end
end
