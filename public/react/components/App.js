import React, { useState, useEffect } from 'react';
import { ItemsList } from './ItemsList';
// import and prepend the api url to any fetch calls
import apiURL from '../api';

export const App = () => {

	const [items, setItems] = useState([])

	async function fetchItems(){
		try {
			const response = await fetch(`${apiURL}/items`);
			console.log("url: " + apiURL);
			const itemsD = await response.json();
			setItems(itemsD);
			console.log("Items set to: " + items);
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}

	useEffect(() => {
		fetchItems();
	}, []);

	return (
		<main>	
      <h1>Item Store</h1>
			<h2>All things 🔥</h2>
			<ItemsList items={items} />
		</main>
	)
}