class AddTaskDescriptionToTasks < ActiveRecord::Migration[6.1]
  def change
    add_column :tasks, :task_description, :string
  end
end
