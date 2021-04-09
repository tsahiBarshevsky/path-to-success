import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-scroll';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import Image1 from '../../images/chronometer.png';
import Image2 from '../../images/reading.png';
import Image3 from '../../images/videoconference.png';
import Image4 from '../../images/writing.png';

const useStyles = makeStyles(() => 
({
    grid:
    {
        width: '85%',
        padding: '20px 0',
        '@media (max-width: 600px)':
        {
            width: '100%'
        }
    }
}));

export default function Tips() 
{
    const classes = useStyles();

    return (
        <div className="tips-container" id="tips">
            <h1 className="section-title">אז איך ללמוד נכון?</h1>
            <h3 className="section-subtitle">הנה כמה טיפים שאולי תמצאו מועילים עבורכם</h3>
            <Grid className={classes.grid} spacing={3} container direction="row" justify="center" alignItems="stretch">
                <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
                    <ScrollAnimation animateIn="animate__backInUp" animateOnce>
                        <div className="image-container">
                            <img src={Image1} alt=""/>
                        </div>
                        <p className="content">
                            עדיף לא לחכות לרגע האחרון, לא במטלות ולא בלמידה באופן כללי;
                            דחיינות היא לא התכונה שאתם רוצים לאמץ בתואר.
                            חזרו בסוף כל יום על החומר, והתחילו מטלות בזמן.
                        </p>
                    </ScrollAnimation>
                </Grid>
                <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
                    <ScrollAnimation animateIn="animate__backInUp" delay={500} animateOnce>
                        <div className="image-container">
                            <img src={Image2} alt=""/>
                        </div>
                        <p className="content">
                            ללמוד, פשוט ללמוד ולחזור על החומר. נכון שלא תמיד יש כוח,
                            אבל ככל שתקדישו לזה יותר זמן במהלך הסמסטר,
                            כך פחות תתעכבו על חזרות על החומר
                            ויהיה לכם קל יותר בתקופת מבחנים.
                        </p>
                    </ScrollAnimation>
                </Grid>
                <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
                    <ScrollAnimation animateIn="animate__backInUp" delay={1000} animateOnce> 
                        <div className="image-container">
                            <img src={Image3} alt=""/>
                        </div>
                        <p className="content">
                            הודים ביוטיוב! כן, כן.
                            לא תמיד המרצים ברורים (מחילה), אז אל תהססו
                            ותחפשו שיעורים מוקלטים בגוגל וביוטיוב שיכולים
                            לפשט הכל. לינקים כאלו תוכלו למצוא
                            <Link className="link"
                                smooth={true} duration={1000} spy={true}
                                exact='true' offset={-20}
                                to="links"
                                >
                                    כאן
                            </Link>
                            .
                        </p>
                    </ScrollAnimation>
                </Grid>
                <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
                    <ScrollAnimation animateIn="animate__backInUp" delay={1500} animateOnce>
                        <div className="image-container">
                            <img src={Image4} alt=""/>
                        </div>
                        <p className="content">
                            עבורי השיטה הטובה ביותר לזכור חומר היא לסכם אותו.
                            אמליץ לכם לכתוב הכל בזמן השיעור ובהמשך, לסכם
                            בקצרה עבורכם. אם אתם פחות מתחברים לזה, אז קראו
                            סיכומים של אחרים.
                        </p>
                    </ScrollAnimation>
                </Grid>
            </Grid>
        </div>
    )
}
