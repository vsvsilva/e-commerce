import React from 'react'
import { Grid } from '@material-ui/core'
import Product from './product/Product'
import useStyles from './styles.js'

const products = [
    {id: 1, name: 'shoes', description: 'Running shoes.', price: '$5', image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/white-female-shoes-on-feet-royalty-free-image-912581410-1563805834.jpg?crop=1.00xw:0.752xh;0,0.127xh&resize=1200:*'},
    {id: 2, name: 'Macbook', description: 'Apple Macbook.', price: '$10', image: 'data:image/jpeg;base64,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'}
]

const Products = () => {
    const classes = useStyles()

    return(
        <main classeName={classes.root}>
            <div className={classes.toolbar}>testando</div>
            <Grid container justify="center" spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product}/>
                    </Grid>
                ))}
            </Grid>
        </main>
    )
}

export default Products