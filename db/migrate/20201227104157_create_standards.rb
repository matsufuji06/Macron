class CreateStandards < ActiveRecord::Migration[5.0]
  def change
    create_table :standards do |t|
      t.references :user,             null: false, foreign_key: true
      t.decimal    :calorie,          null: false
      t.decimal    :carbo,            null: false
      t.decimal    :fat,              null: false
      t.decimal    :protein,          null: false
      t.decimal    :weight,           null: false
      t.decimal    :idealweight,      null: false
      t.decimal    :metabolism,       null: false
      t.decimal    :basalmetabolism,  null: false
      t.integer    :age,              null: false, default: 0
      t.integer    :workinglevel,     null: false, default: 0
      t.timestamps
    end
  end
end
