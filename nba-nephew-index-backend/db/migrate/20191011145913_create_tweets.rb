class CreateTweets < ActiveRecord::Migration[5.2]
  def change
    create_table :tweets do |t|
      t.string :name
      t.string :tweetid
      t.references :userid
      t.timestamps
    end
  end
end
