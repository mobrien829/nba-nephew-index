class CreateUserTweets < ActiveRecord::Migration[5.2]
  def change
    create_table :user_tweets do |t|
      t.reference :userid
      t.reference :tweetid

      t.timestamps
    end
  end
end
