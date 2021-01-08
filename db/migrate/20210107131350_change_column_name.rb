class ChangeColumnName < ActiveRecord::Migration[6.1]
  def change
    rename_column :questions, :formula, :variable
    #Ex:- rename_column("admin_users", "pasword","hashed_pasword")
  end
end
