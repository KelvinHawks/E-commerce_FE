import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/invetory.css';


const InventoryNavbar = () => {
    return (
        <nav id="sidebar" style={{flexDirection: 'column'}}>
            <div className="sidebar-header">
                <h3><b>Logo</b></h3>
            </div>

            <ul className="list-unstyled" id="navlist">
                <li className="#">
                    <Link to="#" data-toggle="collapse" aria-expanded="false" className="navlink">
                        Dashboard
                    </Link>
                    
                </li>

                <li>
                    <Link to="#" className="navlink">
                        Inventory
                    </Link>
                </li>

                <li>
                    <Link to="#" className="navlink">
                        Update<br />
                        Stock
                    </Link>
                </li>
                <li>
                    <Link to="#" className="navlink">
                        Financial<br />
                        Statements
                    </Link>
                </li>

            </ul>
        </nav>
    );
};

export default InventoryNavbar;