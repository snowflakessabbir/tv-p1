import React from 'react';
import { Link } from 'react-router-dom';
import "./NavBar.css"

const Navbar = () => {
    const logo = "https://i.ibb.co/K946LBb/logo.png"
    return (
        <div>
            <div className="container top-navbar mx-auto py-3">
                <div className="logo">
                    <Link to="/"><img src={logo} alt="" /></Link>
                </div>  
                <div className="search">
                    <input className="search-input px-4 py-2" placeholder="Search for Products" type="text" />
                    <button className="search-btn px-4 py-2"><i className="fas fa-search"></i></button>
                </div> 
                <div className="user d-flex justify-content-between align-items-center">
                    <Link className="d-flex justify-content-between align-items-center" to="#">
                        <i className="fas fa-language"></i>
                        <select className="select-lang" name="" id="">
                            <option value="0">English</option>
                            <option value="1">Chines</option>
                        </select>

                    </Link>
                    <Link to=""><i className="fas fa-user"></i></Link>
                    <Link to=""><i className="fas fa-clipboard"></i></Link>
                </div>         
            </div>


            {/* menu bar start */}

            <div className="menu-bar ">

                <nav className="nav">
                    <ul>
                        <li><Link to="#">Trending <i className="fas fa-caret-down"></i></Link>
                            <ul>
                                    <li><Link to="#">Jewellery</Link></li>
                                    <li><Link to="#">Jewellery</Link></li>
                                    <li><Link to="#">JJewellery</Link></li>
                                </ul>
                        </li>
                        <li><Link to="#">Jewellery <i className="fas fa-caret-down"></i></Link>
                            <ul>
                                <li><Link to="#">Jewellery</Link></li>
                                <li><Link to="#">Jewellery</Link></li>
                                <li><Link to="#">Jewellery</Link></li>
                            </ul>
                        </li>
                        <li><Link to="#">Jewellery <i className="fas fa-caret-down"></i></Link>
                            <ul>
                                <li><Link to="#">Jewellery</Link></li>
                                <li><Link to="#">Jewellery</Link></li>
                                <li><Link to="#">Project 3</Link></li>
                            </ul>
                        </li>
                        <li><Link to="#">Jewellery</Link></li>
                        <li><Link to="rings" >Rings</Link></li>
                    </ul>
                </nav>


            </div>
        </div>
    );
};

export default Navbar;