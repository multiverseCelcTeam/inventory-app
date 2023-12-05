import { Link, useParams } from 'react-router-dom';

const ItemPage = ({ items }) => {
    const id = Number(useParams().id)
    const item = items.find((item) => item.id === id);

    return (
        <>
            <h3>{item.name}</h3>
            <h3>{item.price}</h3>
            <h3>{item.description}</h3>
            <h3>{item.category}</h3>
            <img src={item.image} alt={item.name} />
            <Link to='/'>Back to Main Page</Link>
        </>
    )
};

export default ItemPage;