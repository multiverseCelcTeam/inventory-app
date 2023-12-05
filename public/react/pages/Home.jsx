import { ItemsList } from "../components/ItemsList";
import  AddItem  from "../components/AddItem";
const Home = ({ items, setItems }) => {
    return (
    <main>	
        <h1>Item Store</h1>
        <h2>All things 🔥</h2>
        <AddItem items={items} setItems={setItems} />
        <ItemsList items={items} />
    </main>
    )
};

export default Home;