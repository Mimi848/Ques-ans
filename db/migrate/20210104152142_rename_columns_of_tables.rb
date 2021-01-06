class RenameColumnsOfTables < ActiveRecord::Migration[6.1]
  def change
    rename_column :questions, :question, :title
    add_column :questions, :formula, :string
    
    rename_column :answers, :answer, :text
    add_column :answers, :value, :integer
  end
end
