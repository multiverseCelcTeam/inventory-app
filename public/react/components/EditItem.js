import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import itemServices from '../services/Item.js';

const EditItem = ({ items, setItems }) => {
    const navigate = useNavigate();
    const id = useParams().id
    const item = items.find((item) => item.id === Number(id));

    const [name, setName] = useState(item.name);
    const [price, setPrice] = useState(item.price);
    const [description, setDescription] = useState(item.description);
    const [category, setCategory] = useState(item.category);
    const [image, setImage] = useState(item.image);

    const handleSubmit = (e) => {
        e.preventDefault();

        const edittedItem = {
          name,
          price,
          description,
          category,
          image,
        };
    
        setItems([...items, edittedItem]);
        console.log(id, edittedItem, 'IN COMPONENT')
        itemServices.editItem(id, edittedItem);
        navigate('/');
    }

    return (
        <>
          <h1>Edit Item</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
    
            <input
              type="text"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
    
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
    
            <input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
    
            <input
              type="text"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
    
            <button type="submit">Submit</button>
          </form>
        </>
    )
};

export default EditItem;