import React from 'react';
import { Typography } from '@material-ui/core';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
    typography:
    {
        allVariants: { fontFamily: `"Alef", sans-serif`, textAlign: 'center' },
    }
});

export default function Hero() 
{
    return (
        <div className="hero-container">
            <div className="hero-content" title="Photo by Eli Francis from Unsplash">
                <MuiThemeProvider theme={theme}>
                    <Typography variant="h3">הדרך להצלחה שלך יכולה להתחיל מכאן</Typography>    
                    <Typography variant="h5">מחברות קורס, טיפים וסיכומים מקוריים</Typography>    
                </MuiThemeProvider> 
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#f5f5f5" fill-opacity="1" d="M0,192L34.3,186.7C68.6,181,137,171,206,149.3C274.3,128,343,96,411,106.7C480,117,549,171,617,192C685.7,213,754,203,823,176C891.4,149,960,107,1029,117.3C1097.1,128,1166,192,1234,202.7C1302.9,213,1371,171,1406,149.3L1440,128L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path>
            </svg>
            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#000b76" fill-opacity="1" d="M0,192L34.3,186.7C68.6,181,137,171,206,149.3C274.3,128,343,96,411,106.7C480,117,549,171,617,192C685.7,213,754,203,823,176C891.4,149,960,107,1029,117.3C1097.1,128,1166,192,1234,202.7C1302.9,213,1371,171,1406,149.3L1440,128L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"></path></svg> */}
        </div>
    )
}
