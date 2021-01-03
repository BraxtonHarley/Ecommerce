import React from 'react';
import { Typography, Button, Card, CardActions, CardContent, CardMedia } from '@material-ui/core';

import useStyles from './styles';

const CartIem = ({ item }) => {
    const classes = useStyles(); 

    return (
        <Card>
            <CardMedia image={item.media.source} alt={item.name} className={classes.media} />
            <CardContent className={classes.cardContent}>
                <Typography variant='h4'>{item.name}</Typography>
                <Typography variant='h6'>{item.line_total.formatted_with_symbol}</Typography>
            </CardContent>
            <CardActions className={classes.cardActons}>
                <div className={classes.buttons} >
                    <Button type='button' size='small'>-</Button>
                    <Typography>{item.quantity}</Typography>
                    <Button type='button' size='small'>+</Button>
                </div>
                <Button variatn='contained' type='button' color='secondary'>Remove</Button>
            </CardActions>
        </Card>
    )
}

export default CartIem