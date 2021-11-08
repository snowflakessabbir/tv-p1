import React, { useState } from 'react';

const useProductID = (props) => {
    const [productID, setProductID] = useState(0)
    console.log(productID)
    setProductID(props)
    
};

export default useProductID;