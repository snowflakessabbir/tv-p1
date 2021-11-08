import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import useProductID from "../../useHooks/useProductID/useProductID"
import "./Rings.css"

const Rings = () => {
    const [rings, setRings] = useState([]);
    // const [setProductID] = useProductID()
    

    useEffect(()=>{
        fetch("/dataInfo.JSON")
        .then(result => result.json())
        .then(data => setRings(data))
    },[])

    return (
        <div className="container rings my-5" >
            <div className="rings-card  mx-auto">
                {rings.map(product=>( 
                    <div key={product.key} className="rounded ring-card">
                    <Link to="productDetails">
                    {product.name}
                    </Link>
                </div> 
                ))}
            </div>
        </div>
    );
};

export default Rings;