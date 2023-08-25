import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, setItems }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  // ShoppingList > Filter
  const [search, setSearch] = useState("")
  function onSearchChange(e) {
    setSearch(e.target.value)
  }
  //
  // Filter based on search bar
  const searchResults = itemsToDisplay.filter((item) => {
    return item.name.toLowerCase().includes(search.toLowerCase())
  });
  //
  // Add new item
  function onItemFormSubmit(newItem) {
    const updatedItems = [...items, newItem]
    setItems(updatedItems)
  }
  //

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit} />
      <Filter onCategoryChange={handleCategoryChange} search={search} selectedCategory={selectedCategory} onSearchChange={onSearchChange} />
      <ul className="Items">
        {searchResults.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
