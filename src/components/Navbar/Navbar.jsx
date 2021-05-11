import React from 'react';
import { Link, useLocation } from 'react-router-dom'; 
import { AppBar, Toolbar, IconButton, Badge, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';

import useStyles from './styles';

import logo from '../../assets/logo.png';

const Navbar = ({ totalItems }) => {
    const classes = useStyles();
    const location = useLocation();



    return (
        <div>
            <AppBar postion="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    <Typography component={ Link } to='/' variant='h4' className={classes.title} color='inherit'>
                       
                        <img src={logo} alt="Specialty Coffee Co." height='75px' className={classes.image} />
                       
                        Specialty Coffee Co.
                    </Typography>
                   
                    <div className={classes.grow} />

                    {location.pathname === '/', '/about', '/products' && (

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
