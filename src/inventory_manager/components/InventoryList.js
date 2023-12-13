import React, { useState, useEffect } from "react";
import '../styles/invetory.css';

const InventoryList = () => {
    //simulated data
    const [inventory, setInventory] = useState([
        { id: 1, name: 'Product A', category: 'Electronics', quantity: 20 },
        { id: 2, name: 'Product B', category: 'Clothing', quantity: 15 },
        { id: 3, name: 'Product C', category: 'Electronics', quantity: 8 },
    ])

    //filtedred inventopry based on category
    const [filteredInventory, setFilteredInventory] = useState(inventory);

    //category filter state
    const [selectedCategory, setSelectedCategory] = useState('All');

    //searchbar state
    const [searchWord, setSeachWord] = useState('');

    //update filtered inventory when categopry changes
    useEffect(() => {
        if (selectedCategory === 'All'){
            setFilteredInventory(inventory)
        } else{
            const filteredItems = inventory.filter((item) => 
            item.category && 
            item.category.toLowerCase() === selectedCategory.toLowerCase());
            setFilteredInventory(filteredItems);
        }
    },[selectedCategory, inventory]);

    useEffect(() => {
        const searchWordLower = searchWord.toLowerCase();
        const filtedredItems = inventory.filter(
            (item) => 
               item.label && item.label.toLowerCase().includes(searchWordLower) ||
            item.category && item.category.toLowerCase().includes(searchWordLower)
        );
        setFilteredInventory(filtedredItems);
    }, [searchWord, inventory])

    return (
        <div id="filter">
            <div id="inventory_list">
                <h2>Inventory List</h2>
            </div>

            {/*category filter*/}
            <div>
                <label>Filtered by category:</label>
                <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                        <option value="All"> All Categories </option>
                        <option value="Electronics">Electronics</option>
                        <option value="clothing">Clothing</option>
                    </select>
            </div>
            <div >
                <label>Search:</label>
                <input 
                    type="text"
                    placeholder="Seach items"
                    value={searchWord}
                    onChange={(e) => setSeachWord(e.target.value)}
                    />
            </div>
            <ul>
                {filteredInventory.map((item) => (
                    <li key={item.id}>
                        {item.name} - {item.quantity} in stock - Category: {item.category}
                    </li>
                ))}
            </ul>
        </div>
    )
};
export default InventoryList;

