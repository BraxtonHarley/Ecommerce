import React from 'react';
import { Container, Typography, Button, Grid } from '@material-ui/core';
import useStyles from './styles';
import CartItem from './CartItem/CartItem';
import { Link } from 'react-router-dom';
 
const Cart = ({ cart, handleUpdateCartQty, handleEmptyCart, handleRemoveFromCart, refreshCart }) => {
    const classes = useStyles();

    

    const EmptyCart = () => (
        <Typography varient='subtitle1' >Oh no! You forgot to add items to your cart!
            <Link to='/' className={classes.link}>
                Start adding some
            </Link>!
         </Typography>
    );


    const FilledCart = () => (
        <>
            <Grid container spacing={3} >
                
                { cart.line_items.map((item) => (
                    <Grid item xs={12} sm={4} key={item.id}>
                       <CartItem item={item} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart} onRefreshCart={refreshCart} />
                    </Grid>
                )) }

            </Grid>

            <div className={classes.cardDetails} style={{paddingBottom: '50px'}}>
                
                <Typography variant="h4">Subtotal: { cart.subtotal.formatted_with_symbol}</Typography>
                
                <div>
                    <Button className={classes.emptyButton} size='large' type='button' variant='contained' color="secondary" onClick={handleEmptyCart}>Empty Cart</Button>
                    
                    <Button component={ Link } to='/checkout' className={classes.checkoutButton} size='large' type='button' variant='contained' color="primary">Checkout</Button>
                </div>
            </div>
        </>
    );


    return (
        <Container>
            <div className={classes.toolbar} />

            <Typography className={classes.title} variant='h4' gutterBottom>
                Shopping Cart
            </Typography>

            { !cart.line_items.length ? <EmptyCart /> : <FilledCart /> }
        </Container>
    )
}

export default Cart;