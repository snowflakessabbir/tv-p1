import React, { useEffect, useState } from 'react';

const Products = () => {
    const [products, setProducts] = useState([]);


    useEffect(()=>{
        fetch("/dataInfo.JSON")
        .then(result => result.json())
        .then(data => setProducts(data))
    },[])

    return (
        <div className=" container border border-primary my-4">
            <div>
                <h1>Best seller : {products.length} </h1>
                <button>View All</button>
            </div>
            <div>
                
            </div>
        </div>
    );
};

export default Products;