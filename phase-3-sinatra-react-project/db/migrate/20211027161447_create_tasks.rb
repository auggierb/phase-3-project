class CreateTasks < ActiveRecord::Migration[6.1]
  def change
    create_table :tasks do |t|
      t.string :category
      t.string :username
      t.datetime :when_created
    end
  end
end
