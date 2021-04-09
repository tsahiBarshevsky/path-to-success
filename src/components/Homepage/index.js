import React from 'react';
import Navbar from '../Navbar';
import Hero from '../Hero';
import Tips from '../Tips';
import Summaries from '../Summaries';
import Links from '../Links';
import Footer from '../Footer';
import BackToTop from '../Back To Top Button';

export default function Homepage() 
{
    return (
        <>
            <Navbar />
            <Hero />
            <Tips />
            <Summaries />
            <Links />
            <Footer />
            <BackToTop showBelow={110} />
        </>
    )
}
