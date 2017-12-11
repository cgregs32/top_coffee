35.times do |coffee|
  Coffee.create!(
    blend: Faker::Coffee.blend_name,
    variety: Faker::Coffee.variety,
    origin: Faker::Coffee.origin,
    flavor: Faker::Coffee.notes
  )

end
