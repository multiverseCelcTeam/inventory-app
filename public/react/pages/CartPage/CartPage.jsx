import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import userServices from '../../services/User';

const CartPage = () => {
    const [cartItems, setCartItems] = useState([]); 

    async function fetchCart() {
		try {
			const items = await userServices.getCart(1);
            console.log(items)
			setCartItems(items.items)
		}
		catch (error) {
			console.log(error.message)
		}
	}

	useEffect(() => {
		fetchCart();
	}, []);

    if(!cartItems.length) {
        return <h1>Nothing in Cart</h1>
    }

    return (
        <>
            <ul>
                {cartItems.map((item, idx) => (
                    <li key={idx}>{item.name}</li>
                ))}
            </ul>
            <Link to="/"><button>Back to Main Page</button></Link>
        </>
    )
};

export default CartPage;