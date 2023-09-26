import React from 'react';
import HeroPage from './HeroPage'
import CustomerVid from './CustomerVid'
import Pricing from './Pricing'
import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';

const FrontPage = ()=>{

    return(
        <Container>
            <Stack gap={3}>
                <HeroPage />
                <div><CustomerVid /></div>
                <div className='p-2'><Pricing /></div >
            </Stack>
        </Container >
    )
}
export default FrontPage;