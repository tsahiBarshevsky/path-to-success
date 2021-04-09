import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpandLessRoundedIcon from '@material-ui/icons/ExpandLessRounded';
import Fab from '@material-ui/core/Fab';
import ScrollToTop from 'react-scroll-up';

const useStyles = makeStyles(() => ({
    toTop:
    {
        color: '#212121',
        zIndex: 20,
        position: 'fixed',
        bottom: 9,
        right: 8,
        border: '2px solid #212121',
        backgroundColor: 'transparent',
        transition: '0.3s ease-out',
        "&:hover":
        {
            color: 'white',
            border: '2px solid #212121',
            backgroundColor: '#212121',
            transform: 'translateY(-5%)',
            transition: '0.3s ease-in',
        }
    },
    arrow:
    {
        fontSize: 60
    }
}));

const BackToTop = ({showBelow}) => 
{
    const clasess = useStyles();
    const [show, setShow] = useState(showBelow ? false : true);
    const scrollToTopStyle = {
        transitionDuration: '0.7s',
        bottom: 30
    }
    
    const handleScroll = () =>
    {
        if (window.pageYOffset > showBelow) {
            if (!show) setShow(true);
        } else {
            if (show) setShow(false);
        }
    }

    useEffect(() =>
    {
        if (showBelow)
        {
            window.addEventListener(`scroll`, handleScroll);
            return () => window.removeEventListener(`scroll`, handleScroll);
        }
    })

    const handleClick = () => 
    {
        window['scrollTo']({top: 0, behavior: 'smooth'});
    }

    return (
        <ScrollToTop duration={1250} showUnder={70} style={scrollToTopStyle}>
            <span>
                <Fab size="medium" onClick={handleClick} className={clasess.toTop}>
                    <ExpandLessRoundedIcon className={clasess.arrow} />
                </Fab>
            </span>
        </ScrollToTop>
    )
}

export default BackToTop;