import React, { useEffect, useState } from 'react';

const UseProduct = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);
    return [services, setServices]
};

export default UseProduct;