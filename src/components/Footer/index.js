import React from 'react'

export default function Footer()
{
    return (
        <div className="footer-container">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#f5f5f5" fill-opacity="1" d="M0,192L34.3,186.7C68.6,181,137,171,206,149.3C274.3,128,343,96,411,106.7C480,117,549,171,617,192C685.7,213,754,203,823,176C891.4,149,960,107,1029,117.3C1097.1,128,1166,192,1234,202.7C1302.9,213,1371,171,1406,149.3L1440,128L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"></path>
            </svg>
            <div className="footer-content">
                <div className="text">
                    נתיב להצלחה &bull; כל הזכויות שמורות &copy; {new Date().getFullYear()}
                </div>
            </div>
        </div>
    )
}
