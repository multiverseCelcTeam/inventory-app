import { Link, useParams, useNavigate } from 'react-router-dom';
import itemsServices from "../services/Item";

const ItemPage = ({ items, setItems }) => {
    const id = Number(useParams().id)
    const item = items.find((item) => item.id === id);
    const navigate = useNavigate();

    const handleDelete = (id) => {
        const filteredItems = items.filter((item) => item !== items.id)
          console.log(filteredItems, id, 'idx of to be deleted')
        setItems(filteredItems);
          itemsServices.deleteItem(id);
          navigate('/');
       }

    return (
        <>
            <h3>{item.name}</h3>
            <h3>{item.price}</h3>
            <h3>{item.description}</h3>
            <h3>{item.category}</h3>
            <img src={item.image} alt={item.name} />
            <button onClick={handleDelete}>Delete Item</button>
            <Link to='/'>Back to Main Page</Link>
        </>
    )
};

export default ItemPage;