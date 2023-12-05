import { ItemsList } from "../components/ItemsList";

const Home = ({ items }) => {
    console.log(items)
    return (
    <main>	
        <h1>Item Store</h1>
        <h2>All things 🔥</h2>
        <ItemsList items={items} />
    </main>
    )
};

export default Home;