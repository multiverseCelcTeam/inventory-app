import React, { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
// import and prepend the api url to any fetch calls
import apiURL from '../api';
import Home from '../pages/home';
import ItemPage from '../pages/ItemPage';

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
		<Routes>
			<Route path="/" element={<Home items={items} />} />
			<Route path="/:id" element={<ItemPage items={items} />}/>
		</Routes>
	)
}