import { useEffect } from "react";
import { ItemsList } from "../../components/ItemsList/ItemsList";
import ItemServices from '../../services/Item.js';
import { Link } from "react-router-dom";
import './Home.css';


const Home = ({ items, setItems }) => {
	async function fetchItems() {
		try {
			const items = await ItemServices.getItems();
			setItems(items)
		}
		catch (error) {
			console.log(error.message)
		}
	}

	useEffect(() => {
		fetchItems();
	}, []);

    return (
    <main>
		<div className="test"></div>
        <h1>Item Store</h1>
        <h2>All things 🔥</h2>
        <Link to='/newItem'>Post New Item</Link>
        <ItemsList items={items} />
    </main>
    )
};

export default Home;