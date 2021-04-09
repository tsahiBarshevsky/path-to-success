import React from 'react';

export default function Footer()
{
    return (
        <div className="footer-container" title="Photo by Janko Ferlič from Unsplash">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#f5f5f5" fillOpacity="1" d="M0,128L40,149.3C80,171,160,213,240,202.7C320,192,400,128,480,112C560,96,640,128,720,160C800,192,880,224,960,213.3C1040,203,1120,149,1200,133.3C1280,117,1360,139,1400,149.3L1440,160L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path>
            </svg>
            <div className="footer-content">
                <p>
                    נתיב להצלחה &bull; כל החומרים הינם מקוריים
                    <br/>
                    כל הזכויות שמורות לצחי בארשבסקי &copy; {new Date().getFullYear()}
                </p>
            </div>
        </div>
    )
}
