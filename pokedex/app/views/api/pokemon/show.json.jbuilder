

json.pokemon do
  json.extract! @poke, :id, :name, :attack, :defense, :moves, :poke_type
  json.image_url asset_path(@poke.image_url)
  json.extract! @poke, :item_ids
end
json.items do
  item_ids = @poke.item_ids 
  item_ids.each do |item_id|
    item = Item.find(item_id)
    json.set! item.id do
      json.extract! item, :id, :name, :pokemon_id, :price, :happiness 
      json.image_url asset_path(item.image_url)
    end
  end
end


