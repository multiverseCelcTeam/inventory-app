import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import Home from '../pages/home';
import ItemPage from '../pages/ItemPage';
import AddItem from './AddItem';
import EditItem from './EditItem';


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