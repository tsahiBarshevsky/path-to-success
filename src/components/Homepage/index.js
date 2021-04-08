import React from 'react';
import Summaries from '../Summaries';
import Hero from '../Hero';
import Tips from '../Tips';
import Footer from '../Footer';

export default function Homepage() 
{
    return (
        <>
            <Hero />
            <Tips />
            <Summaries />
            <Footer />
        </>
    )
}
