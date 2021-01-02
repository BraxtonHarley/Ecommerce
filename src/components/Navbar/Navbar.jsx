import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import useStyles from './styles';

import logo from '../../assets/logo.png';

const Navbar = ({ totalItems }) => {
    const classes = useStyles();

    return (
        <div>
            <AppBar postion="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    <Typography varient='h6' className={classes.title} color='inherit'>
                        <img src={logo} alt="Commerce.js" height='25px' className={classes.image} />
                        Commerce.js
                    </Typography>
                    <div className={classes.grow} />
                    <div className={classes.button}>
                        <IconButton aria-label='Show Cart Items' color='inherit'>
                            <Badge badgeContent={totalItems} color='secondary'>
                                <ShoppingCart />
                            </Badge>
                        </IconButton>

                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar
