import React from 'react'
import {Container, Typography, Button, Grid} from '@material-ui/core'
import { mergeClasses } from '@material-ui/styles'
import useStyles from './styles'
import CartItem from './cartItem/CardItem'
import { Link } from 'react-router-dom'

const Cart = ({ cart }) => {
    const classes = useStyles()
    

    const EmptyCart = () => (
        <Typography variant="subtitle1">You have no items in your shopping cart, 
            <Link to="/" className={classes.link}>start adding some</Link>!
        </Typography>
    )

    const FilledCart = () => (
        <>
            <Grid container spacing={3}>
                {cart.line_items.map((item) => (
                    <Grid item xs={12} sm={4} key={item.id}>
                        <CartItem item={item}/>
                    </Grid>
                ))}
            </Grid>
            <div className={classes.cardDetails}>
                    <Typography variant="h4">
                        subtotal: { cart.subtotal.formatted_with_symbol }
                    </Typography>
                    <div>
                        <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary">
                            Empty Cart
                        </Button>
                        <Button className={classes.checkout} size="large" type="button" variant="contained" color="primary">
                            Checout
                        </Button>
                    </div>
            </div>
        </>
    )

    if(!cart.line_items) return 'Loading...'

    return (
        <Container>
            <div className={mergeClasses.toolbar}/>
            <Typography className={classes.title} variant="h3" gutterBottom>Your Shopping Cart</Typography>
            {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
        </Container>
    )
}

export default Cart
