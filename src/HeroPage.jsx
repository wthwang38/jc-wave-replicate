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
        <Container style={{gridTemplateRow:"auto auto auto auto minmax(auto,auto)", gridAutoFlow:'row', paddingBottom:'3rem'}}>
            <Row >
                <Col className='p-2'>
                   <h1 style={{ fontWeight: '400', fontSize: '3.25rem', lineHeight: '1.14', fontFamily:'Dinerodisplay, sans-serif' }}>Manage Your Money like a Boss</h1>
                    <p>
                        Create beautiful invoices, accept online payments, and make accounting easy-all in one place-with Johnny's suite of money tools
                    </p>
                    <Login />
                </Col>
                <Col ><img alt='happyman'  src='/whitemanpic.webp' className='container-md'/></Col>
            </Row>
        </Container >
    )
}

export default HeroPage