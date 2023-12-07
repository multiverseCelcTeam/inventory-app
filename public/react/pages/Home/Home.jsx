import { useEffect } from "react";
import { ItemsList } from "../../components/ItemsList/ItemsList";
import ItemServices from '../../services/Item.js';
import { Link } from "react-router-dom";
import './Home.css';
import './inventory.jpg';


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
		<header>
			<a href="#" class="logo">
			<h1>Inventory Management</h1></a>
		<ul class="navbar">
			<li><a href="#" class="active">Admin</a></li>
			<li><a href="#" class="active">Shopping Cart</a></li>
		</ul>

		<div class="icons">
			<a href="#">search</a>
			<a href="#">shopping cart<i/></a>
			<div class="bx bx-menu" id="menu-icon"></div>
		</div>
		</header>
		<body>
		<section class="home">
		  <div class="home-text">
        	<h2>All Items</h2>
		  </div>
		  <div class ="home-img">
			<img src="./inventory.jpg"></img>
		  </div>
		</section>
		<Link to='/newItem'>Post New Item</Link>
        <ItemsList items={items} />
		</body>
    </main>
    )
};

export default Home;