import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./BestSeller.css"

const BestSeller = () => {

    const [products, setProducts] = useState([]);

    useEffect(()=>{
        fetch("/dataInfo.JSON")
        .then(result => result.json())
        .then(data => setProducts(data))
    },[])


    return (
        <div className="container best-seller my-5" >
            <div className="d-flex justify-content-between">
                <h1 className="bs-h">Best Seller</h1>
                <Link className="bs-link" to="#">View All</Link>
            </div>
            <div className="d-flex my-3">
                {products.slice(0, 5).map(product=>( 
                <div key={product.key} className="border-clr rounded p-3 m-2 ">
                    <div>
                        <div className="bs-img"><img className="w-100" src={product.img} alt="" /></div>
                        <div>
                            <h4 className="name">Name: {product.name}</h4>
                            <p className="weight">{product.weight}</p>
                            <p className="star">{product.star} <span className="review-count">({product.reviewCount})</span></p>
                            <h2 className="price">${product.price}</h2> 
                        </div>
                    </div>
                </div> 
                ))}
            </div>
        </div>
    );
};

export default BestSeller;