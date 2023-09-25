import React from 'react';
import HeroPage from './HeroPage'
import CustomerVid from './CustomerVid'
import Pricing from './Pricing'
import Stack from 'react-bootstrap/Stack';

const FrontPage = ()=>{

    return(
        <>
            <Stack gap={1}>
                <div className='p-2'><h1>Manage Your Money like a Boss</h1></div>
                <div className='p-2'><HeroPage /></div>
                <div><CustomerVid /></div>
                <div className='p-2'><Pricing /></div >
            </Stack>
        </>
    )
}
export default FrontPage;