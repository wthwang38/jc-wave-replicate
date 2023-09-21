import React from "react";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
const CustomerVid = ()=>{
/*
a "video"
*/
    return(
        <>
            <Container style={{ backgroundColor: '#00008b', color: 'white' }}>
            <div className='container-sm w-75'>
                <Card >
                    <img src='Youtubevidcdemo.webp' alt='youtube Demo' />
                </Card>
            </div>
            
                <h2>One Less Thing To Worry About</h2>
                <ul>
                    <img/><p>A user-friendly dashboard built for you, not your accountant.</p>
                    <img/><p>Peace of mind that you’re always organized ahead of tax season.</p>
                    <img/><p>A complete picture of your business health, wherever you are.</p>
                    <img/><p>Our in-house team of bookkeeping, accounting, and payroll coaches.</p>
                </ul>
            </Container>
        </>
    )
}

export default CustomerVid;