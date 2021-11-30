import React, { useState, useEffect } from 'react'
import { Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, BUtton } from '@material-ui/core'
import { commerce } from '../../../lib/Commerce'
import useStyles from './styles'
import AddressForm from '../AddressForm'
import PaymentForm from '../PaymentForm'

const steps = ['Shipping address', 'Payment details']

const Checkout = ({ cart }) => {
    const classes = useStyles()
    const [activeStep, setActiveStep] = useState(0)
    const [checkoutToken, setCheckoutToken] = useState(null)
    const [shippingData, setShippingData] = useState({})

    useEffect(() => {
        const generateToken = async () => {
            try {
                const token = await commerce.checkout.generateToken(cart.id, { type: 'cart'})

                setCheckoutToken(token)
            } catch (error) {
                
            }
        }
        generateToken()
    },[cart])

    const nextStep = () => setActiveStep((prevAciveStep) => prevAciveStep + 1)
    const backStep = () => setActiveStep((prevAciveStep) => prevAciveStep - 1)

    const next = (data) => {
        setShippingData(data)
        nextStep()
    }

    const Confirmation = () => (
        <div>
            Confirmation
        </div>
    )

    const Form = () => activeStep === 0
        ? <AddressForm checkoutToken={checkoutToken} next={next}/>
        : <PaymentForm shippingData={shippingData}/>
    
    return (
        <>
            <div className={classes.toolbar}/>
            <main className={classes.layout}>
                <Paper className={classes.paper}>
                    <Typography variant="h4" align="center">Checkout</Typography>
                    <Stepper activeStep={activeStep} className={classes.stepper}>
                        {steps.map((step) => (
                            <Step key={step}>
                                <StepLabel>{step}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    {activeStep === steps.lenght ? <Confirmation /> : checkoutToken && <Form />}
                </Paper>
            </main>   
        </>
    )
}

export default Checkout
