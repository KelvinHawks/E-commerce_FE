import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import InventoryNav from "./InventoryList";
import '../styles/invetory.css';

const Dashboard = () => {
    const [totalInventoy, setTotalInventory] = useState(0);
    const [lowStockItems, setLowStockItems] = useState([]);
    const [recentactivities, setRecantActivities] = useState([]);

    useEffect(() => {
        //fetch data
        setTotalInventory(150);
        setLowStockItems([
            { id:1, label: 'Product A', quantity: 5},
            { id:2, label: 'Product B', quantity: 10 },
        ]);

        setRecantActivities([
            { id: 1, activity: 'Product A added', timestamp: '2023-12-01'},
            { id: 2, activity: 'Order #123 shipped', timestamp: '2023-12-02' },
        ]);
    }, []);

    return (

        <div   id="dashboard">
        
            <h2><b>Dashboard</b></h2>
            <div>
                <h3>Total Inventory</h3>
                <p>{totalInventoy}</p>
            </div>

            <div>
                <h3>Low Stock Items</h3>
                <ul>
                    {lowStockItems.map((item) => (
                        <li key={item.id}>
                            {item.label} - {item.quantity} in stock
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <h3>Recent Activities</h3>
                <u>
                    {recentactivities.map((activity) => (
                        <li key={activity.id}>
                            {activity.activity} - {activity.timestamp}
                        </li>
                    ))}
                </u>
            </div>
        </div>
    );
};

export default Dashboard;