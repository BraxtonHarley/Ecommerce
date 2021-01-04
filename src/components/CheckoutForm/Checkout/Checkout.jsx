import React from 'react';
import { Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button } from '@material-ui/core'; 
import classes from '*.module.css';

const Checkout = () => {
    return (
        <>
            <div  className={classes.toolbar} />
            <main className={classes.layout}>
                <Paper className={classes.paper}>
                    <Typography variant='h4'  align='center'>Checkout</Typography>
                </Paper>
            </main>
        </>
    )
}

export default Checkout;
