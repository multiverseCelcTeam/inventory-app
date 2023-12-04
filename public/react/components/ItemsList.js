import React from 'react';
import { Sauce } from './Sauce';

export const ItemsList = ({ items }) => {
	if (!items) {
		return <h1>
			no Items
		</h1>
	}
	return (
		{
			items.map((sauce, idx) => ( <Sauce sauce={sauce} key={idx} />  ))
		}
	)
} 
