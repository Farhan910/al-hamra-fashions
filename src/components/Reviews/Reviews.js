import React from 'react';
import useProducts from '../Hooks/Hooks';

const Reviews = () => {
    const [products] = useProducts();
    const {name,id,img} = products;
    
    return (
        <div>
            {products.map((product) => (
                <>
                <>
                  <h2>name: {product.name}</h2>
                  <img src={product.img} alt="" />
                </>
                <h3>id: {product.id}</h3>
              </>


            ))
            }
        </div>
    );
};

export default Reviews;