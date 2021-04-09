import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar';
import Hero from '../Hero';
import Tips from '../Tips';
import Summaries from '../Summaries';
import Links from '../Links';
import Footer from '../Footer';
import BackToTop from '../Back To Top Button';
import Loading from 'react-loading-animate';
import 'react-loading-animate/dist/main.css';

export default function Homepage() 
{
    const [load, setLoad] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setLoad(true);
        }, 500);
    }, []);

    return (
        <>
            {load?
            <>
                <Navbar />
                <Hero />
                <Tips />
                <Summaries />
                <Links />
                <Footer />
                <BackToTop showBelow={110} />
            </>
            :
            <div className="full-container">
                <Loading type="beat" fill="#d32f2f" />
            </div>}
        </>
    )
}
