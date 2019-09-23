class AddTranslationToTerms < ActiveRecord::Migration[5.2]
  def change
    add_column :terms, :translation, :string
  end
end
