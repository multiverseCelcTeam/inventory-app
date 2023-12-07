import { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import itemServices from '../../services/Item.js';

const EditItem = ({ items, setItems }) => {
      //Styling
  const header = {
      textAlign: "center", 
      fontSize: "5vh"
  }
  const formStyle = {
      display: "flex",
      flexDirection: "column",
      boxSizing: "border-box",
      justifyContent: "space-between",
      alignItems: "center",
      height: "80vh",
      margin: "5px"
  }
  const inputStyle = {
    display: "flex",
    height: "10vh",
    width: "90vw",
    fontSize: "8vh"
  }
  const submitStyle = {
      height: "15vh",
      fontSize: "5vh"
  }

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
          <h1 style={header}>Edit Item</h1>
          <form onSubmit={handleSubmit} style={formStyle}>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={inputStyle}
            />
    
            <input
              type="text"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              style={inputStyle}
            />
    
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              style={inputStyle}
            />
    
            <input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              style={inputStyle}
            />
    
            <input
              type="text"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              style={inputStyle}
            />
    
            <button type="submit" style={submitStyle}>Submit</button>
          </form>
          <Link to={`/${id}`}><button style={submitStyle}>Back To Item</button></Link>
        </>
    )
};

export default EditItem;