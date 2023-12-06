import { Link, useParams, useNavigate } from 'react-router-dom';
import itemsServices from "../services/Item";

const ItemPage = ({ items, setItems }) => {
    const id = useParams().id
    const item = items.find((item) => item.id === Number(id));
    const navigate = useNavigate();

    const handleDelete = (id) => {
        const filteredItems = items.filter((item) => item !== items.id)
          console.log(filteredItems, 'item from filter')
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
            <button onClick={ () => handleDelete(item.id)}>Delete Item</button>
            <Link to='/'>Back to Main Page</Link>
        </>
    )
};

export default ItemPage;