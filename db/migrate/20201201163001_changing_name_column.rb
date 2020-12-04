class ChangingNameColumn < ActiveRecord::Migration[6.0]
  def change
    rename_column :skills, :attribute, :name
  end
end
