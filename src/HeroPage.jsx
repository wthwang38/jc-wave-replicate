import React from "react";
import Login from "./Login";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const HeroPage = ()=>{
/*Hero Layout, Homepage
Main header or Mission
a picture
log-in/Auth
*/
    return(
        <Container fluid>
            <Row>
                <Col><Login /></Col>
                <Col>
                <img alt='happyman'  src='/whitemanpic.webp' className='container-md'/>
                    <p style={{ textAlign: 'center' }}>
                        Create beautiful invoices, accept online payments, and make accounting easy-all in one place-with Johnny's suite of money tools
                    </p></Col>
            </Row>
        </Container >
    )
}

export default HeroPage