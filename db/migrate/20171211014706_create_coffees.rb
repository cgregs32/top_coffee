class CreateCoffees < ActiveRecord::Migration[5.1]
  def change
    create_table :coffees do |t|
      t.string :blend
      t.string :origin
      t.string :variety
      t.string :flavor

      t.timestamps
    end
  end
end
