import { Link, useParams, useNavigate } from "react-router-dom";
import itemsServices from "../../services/Item";
import userServices from '../../services/User';
import { useState, useEffect } from "react";
import "./ItemPage.css";

const ItemPage = ({ items, setItems, user }) => {
  const id = useParams().id;
  //let item = items.find((item) => item.id === Number(id));
  const navigate = useNavigate();

  const [item, setItem] = useState({});
  async function fetchItems() {
		try {
			const items = await itemsServices.getItems();
			setItem(items.find((item) => item.id === Number(id)));
		}
		catch (error) {
			console.log(error.message)
		}
	}
	useEffect(() => {
		fetchItems();
	}, []);


  const handleDelete = (id) => {
    const filteredItems = items.filter((item) => item !== items.id);
    setItems(filteredItems);
    itemsServices.deleteItem(id);
    navigate("/");
  };

  const handleAddToCart = (removeOrAdd, userId, itemId) => {
    userServices.editCart(removeOrAdd, userId, itemId)
    alert('added to cart')
  }

  const handleRemoveFromCart = (removeOrAdd, userId, itemId) => {
    userServices.editCart(removeOrAdd, userId, itemId)
    alert('removed from cart')
  }

  return (
    <>
      <div className="page">
        <div className="item-section">
          <div className="item">
            <h3><span className="tag">name</span>{item.name}</h3>
            <img className="item-image" src={item.image} alt={item.name} />
            <h3><span className="tag">price</span>${item.price}</h3>
            <h3><span className="tag">description</span>{item.description}</h3>
            <h3><span className="tag">category</span>{item.category}</h3>

          </div>

          <div className="buttons">
            <Link to={`/editItem/${id}`} className="link"><button id="edit-btn">Edit</button></Link>
            <button onClick={() => handleDelete(item.id)} id="delete-btn">Delete</button>
            {user && <>
                <button onClick={() => handleAddToCart('add', 1, item.id)}>Add to Cart</button>
                <button onClick={() => handleRemoveFromCart('remove', 1, item.id)}>Remove from Cart</button>
            </> }
            <Link to="/" className="link"><button>Back to Main Page</button></Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemPage;
