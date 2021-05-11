import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart }  from '@material-ui/icons';

import useStyles from './styles';

const Product = ({ product, onAddToCart }) => {
    const classes = useStyles();     

    return (
       <Card className={classes.root}>
           
           {/* CARD IMAGE */}
           <CardMedia className={classes.media} image={product.media.source} title={product.name} />
           

        
           {/* CARD CONTENT */}
           <CardContent>
                <div className={classes.cardContent} >
                    <Typography variant="h5" gutterBottom >
                        {product.name}
                    </Typography>

                    <Typography variant="h5" >
                        {product.price.formatted_with_symbol}
                    </Typography>
               </div>
               <Typography className={classes.cardDescription} dangerouslySetInnerHTML={{ __html: product.description }} variant="body2" color="textSecondary" />
           </CardContent>
           

            {/* CARD BUTTONS */}
           <CardActions disableSpacing className={classes.cardActions} >
               <IconButton aria-label="Add To Cart" onClick={() => onAddToCart(product.id, 1)} >
                   <AddShoppingCart />
               </IconButton>
           </CardActions>
       </Card> 
    )
}

export default Product;
