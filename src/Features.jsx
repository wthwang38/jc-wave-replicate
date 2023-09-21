import React from "react";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
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
            <Navbar justify>
                <Container>
                    <Row>
                        <Col><Button size='lg' style={{ borderRadius: '2rem' }}>Invoicing</Button></Col>
                        <Col><Button size='lg' style={{ borderRadius: '2rem' }}>Payments</Button></Col>
                        <Col><Button size='lg' style={{ borderRadius: '2rem' }}>Accounting</Button></Col>
                        <Col><Button size='lg' style={{ borderRadius: '2rem' }}>Payroll</Button></Col>
                        <Col><Button size='lg' style={{ borderRadius: '2rem' }}>Advisors</Button></Col>
                    </Row>
                </Container>
            </Navbar>
        </>
    )
}

export default Features;