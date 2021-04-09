import React from 'react';
import Hero from '../Hero';
import Tips from '../Tips';
// import Summaries from '../Summaries';
import Links from '../Links';
import Footer from '../Footer';

export default function Homepage() 
{
    return (
        <>
            <Hero />
            <Tips />
            {/* <Summaries /> */}
            <Links />
            <Footer />
        </>
    )
}
