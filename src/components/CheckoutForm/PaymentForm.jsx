import React from 'react'
import { Typography, BUtton, Divider } from '@material-ui/core'
import { Elements, CardElement, ElementConsumer } from '@stripe/react-stripe-js'
import { LoadStrip } from '@stripe/stripe-js'
import Review from './Review'

function PaymentForm({ checkoutToken }) {
    return (
        <>
            <Review checkoutToken={checkoutToken}/>
        </>
    )
}

export default PaymentForm
