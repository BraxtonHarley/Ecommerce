import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product';

const products = [
    { id: 1, name: 'Nano X Mens', description: 'Training Shoes', price: '$120', image: "https://assets.reebok.com/images/w_385,h_385,f_auto,q_auto:sensitive,fl_lossy/f011f25dff594a9c8383ab57017add5d_9366/reebok-nano-x-shoes.jpg" },
    { id: 2, name: 'Nano X Mens', description: 'Training Shoes', price: '$100', image: "https://assets.reebok.com/images/w_385,h_385,f_auto,q_auto:sensitive,fl_lossy/3cac0ee0730e49999e40ab3c010962ea_9366/nano-x-unknown-mens-training-shoes.jpg" },
];

const Products = () => {
    return (
        <main>
            <Grid container justify="center" spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} />  
                    </Grid>

                ))}
            </Grid>
        </main> 
    )};

export default Products;  