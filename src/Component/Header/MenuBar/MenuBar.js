import React from 'react';
import { Link } from 'react-router-dom';
import "./MenuBar.css"

const MenuBar = () => {
    return (
        <div className="menu">
            <div className="menu-bar container">
                <div className="menu-btn py-3 px-4 px-2">
                    <Link to="#">Trending <i className="fas fa-caret-down"></i></Link>
                </div>    
                <div className="menu-btn py-3 px-4 px-2">
                    <Link to="#">Jewellery <i className="fas fa-caret-down"></i></Link>
                </div>    
                <div className="menu-btn py-3 px-4 px-2">
                    <Link to="#">Jewellery <i className="fas fa-caret-down"></i></Link>
                </div>    
                <div className="menu-btn py-3 px-4 px-2">
                    <Link to="#">Jewellery <i className="fas fa-caret-down"></i></Link>
                </div>       
                <div className="menu-btn py-3 px-4 px-2">
                    <Link to="/rings">Rings</Link>
                </div>    
                <div className="menu-btn py-3 px-4 px-2">
                    <Link to="#">Cart</Link>
                </div>    
                <div className="menu-btn py-3 px-4 px-2">
                    <Link to="#">Favourites</Link>
                </div>    
            </div>         
        </div>
    );
};

export default MenuBar;