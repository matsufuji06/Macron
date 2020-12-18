class CreatePosts < ActiveRecord::Migration[5.0]
  def change
    create_table :posts do |t|
      t.references :user,    null: false, foreign_key: true
      t.string     :food,    null: false
      t.string     :image
      t.decimal    :calorie, null: false
      t.decimal    :carbo,   null: false
      t.decimal    :fat,     null: false
      t.decimal    :protein, null: false
      t.decimal    :weight,  null: false
      t.date       :date,    null: false
      t.timestamps
    end
  end
end
