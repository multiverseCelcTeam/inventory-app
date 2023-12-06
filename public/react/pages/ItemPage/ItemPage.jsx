import { Link, useParams, useNavigate } from "react-router-dom";
import itemsServices from "../../services/Item";
import "./ItemPage.css";
const ItemPage = ({ items, setItems }) => {
  const id = useParams().id;
  const item = items.find((item) => item.id === Number(id));
  const navigate = useNavigate();

  const handleDelete = (id) => {
    const filteredItems = items.filter((item) => item !== items.id);
    setItems(filteredItems);
    itemsServices.deleteItem(id);
    navigate("/");
  };

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
            <button id="edit-btn"><Link to={`/editItem/${id}`} className="link">Edit</Link></button>
            <button onClick={() => handleDelete(item.id)} id="delete-btn">Delete</button>
            <button><Link to="/" className="link">Back to Main Page</Link></button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemPage;
