import { useEffect } from "react";
import { ItemsList } from "../../components/ItemsList/ItemsList";
import ItemServices from '../../services/Item.js';
import { Link } from "react-router-dom";
import './Home.css';
import inventory from './inventory.jpg';
import cart from './shopping-cart.png';
import search from './search.png';



const Home = ({ items, setItems, user }) => {
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
		<header>
			<a href="#" class="logo">
			<h1>CELC Inc.</h1></a>
		<ul class="navbar">
			<li><a href="#home" class="active">Home</a></li>
			<li><Link to="/login" class= "active">Admin</Link></li>
			{ user && <li><Link to="/cart" class= "active">Cart</Link></li>}
		</ul>

		<div class="icons">
			
			<a href="#">search</a>
		
			<a href="#">cart</a>
		</div>
		</header>
		<body>
		<section class="home">
		  <div class="home-text">
        	<h2>All Items:</h2>
		  </div>
		  <div class ="home-img">
			<img src={inventory}/>
		  </div>
		</section>
		<Link to='/newItem' class = "btn">Post New Item</Link>
        <ItemsList items={items} />
		</body>
    </main>
    )
};

export default Home;