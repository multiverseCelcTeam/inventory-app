import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import Home from '../pages/Home/Home.jsx';
import ItemPage from '../pages/ItemPage/ItemPage.jsx';
import AddItem from './AddItem/AddItem.js';
import EditItem from './EditItem/EditItem.js';


export const App = () => {
	const [items, setItems] = useState([])

	return (
		<Routes>
			<Route path="/" element={<Home items={items} setItems={setItems}/>} />
			<Route path="/:id" element={<ItemPage items={items} setItems={setItems} />}/>
			<Route path="/newItem" element={<AddItem items={items} setItems={setItems} />}/>
			<Route path="/editItem/:id" element={<EditItem items={items} setItems={setItems} />}/>
		</Routes>
	)
}