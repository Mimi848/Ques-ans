class CreateQuestionTable < ActiveRecord::Migration[6.1]
  def change
    create_table :questions do |t|
      t.string :question
      t.timestamps
    end
  end
end
