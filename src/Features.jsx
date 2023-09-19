import React from "react";
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
const Features = ()=>{
/*
contains features of the site
buttons: Invoicing, Accounting, Payments, Payroll, Advisors
brings to the specific feature
*/
    return (
        <>
            <Container>
                <h2 style={{textAlign:'center'}}>
                    Everything you need.
                </h2>
                <h2 style={{ textAlign: 'center' }}> 
                    Nothing you don't.
                </h2>
            </Container>
            <Carousel >
                <Carousel.Item>
                    <h3>Invoicing</h3>
                    <p>Stop chasing clients for money</p>
                </Carousel.Item>
                <Carousel.Item>
                    <h3>Payments</h3>
                    <p>Get paid faster</p>
                </Carousel.Item>
                <Carousel.Item>
                    <h3>Accounting</h3>
                    <p>Track your income & expenses, painlessly</p>
                </Carousel.Item>
            </Carousel>
        </>
    )
}

export default Features;