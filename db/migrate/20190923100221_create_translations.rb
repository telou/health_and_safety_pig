class CreateTranslations < ActiveRecord::Migration[5.2]
  def change
    create_table :translations do |t|
      t.string :translation
      t.references :term, foreign_key: true

      t.timestamps
    end
  end
end
