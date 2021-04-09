import React from 'react';
import { Typography } from '@material-ui/core';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
    typography:
    {
        allVariants: { fontFamily: `"Gveret-Levin", sans-serif`, textAlign: 'center' },
        h3: { lineHeight: 1, letterSpacing: 1, marginBottom: 5 },
        h5: { letterSpacing: 1 }
    }
});

export default function Hero() 
{
    return (
        <div className="hero-container">
            <div className="hero-content" title="Photo by Aaron Burden from Unsplash">
                <MuiThemeProvider theme={theme}>
                    <Typography variant="h3">נתיב להצלחה &bull; חומרי לימוד של תואר ראשון במדעי המחשב</Typography>    
                    <Typography variant="h5">טיפים, מחברות קורס, סיכומים ושיעורי עזר</Typography>    
                </MuiThemeProvider> 
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#f5f5f5" fillOpacity="1" d="M0,128L40,149.3C80,171,160,213,240,202.7C320,192,400,128,480,112C560,96,640,128,720,160C800,192,880,224,960,213.3C1040,203,1120,149,1200,133.3C1280,117,1360,139,1400,149.3L1440,160L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
            </svg>
        </div>
    )
}
