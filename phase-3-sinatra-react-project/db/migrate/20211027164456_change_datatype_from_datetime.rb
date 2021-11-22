class ChangeDatatypeFromDatetime < ActiveRecord::Migration[6.1]
  def change
    change_column(:tasks, :when_created, :timestamp)
  end
end
