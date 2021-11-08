import React from 'react';
import MenuBar from './MenuBar/MenuBar';
import Navbar from './Navbar/Navbar';

const Header = () => {
    return (
        <div>
            <div className="my-4">
                <Navbar></Navbar>
            </div>
        </div>
    );
};

export default Header;