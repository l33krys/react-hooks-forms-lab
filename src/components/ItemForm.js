import React, {useState} from "react";
import { v4 as uuid } from "uuid";


function ItemForm({ onItemFormSubmit }) {

  const [name, setName] = useState("")
  const [category, setCategory] = useState("Produce")

  return (
    <form className="NewItem" 
      onSubmit={(e) => {
        e.preventDefault()
        onItemFormSubmit({name, category, id: uuid()})
      }}>
      <label>
        Name:
        <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
      </label>

      <label>
        Category:
        <select name="category" value={category} onChange={(e) => setCategory(e.target.value)} >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
