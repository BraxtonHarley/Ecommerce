import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import useStyles from './styles';
import { Link, useLocation } from 'react-router-dom'; 

import logo from '../../assets/logo.png';

const Navbar = ({ totalItems }) => {
    const classes = useStyles();
    const location = useLocation();



    return (
        <div>
            <AppBar postion="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    <Typography component={ Link } to='/' variant='h4' className={classes.title} color='inherit'>
                        <img src={logo} alt="Commerce.js" height='75px' className={classes.image} />
                        Specialty Coffee Co.
                    </Typography>
                    <div className={classes.grow} />
                    {location.pathname === '/' && (

                        <div className={classes.button}>
                            <IconButton component={ Link } to='/cart' aria-label='Show Cart Items' color='inherit'>
                                <Badge badgeContent={totalItems} color='secondary'>
                                    <ShoppingCart />
                                </Badge>
                            </IconButton>

                        </div> 
                        )}
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar
