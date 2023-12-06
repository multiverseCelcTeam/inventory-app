import { useState } from "react";
import itemServices from "../services/Item";
import { useNavigate } from "react-router-dom";

const AddItem = ({items, setItems}) => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      name,
      price,
      description,
      category,
      image,
    };

    setItems([...items, newItem]);
    itemServices.createItem(newItem);
    setName("");
    setPrice(0);
    setDescription("");
    setCategory("");
    setImage("");
    navigate('/');
  };

  return (
    <>
      <h1>Add an Item</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />

        <input
          type="text"
          placeholder="Image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default AddItem;
