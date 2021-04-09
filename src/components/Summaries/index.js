import React, { useEffect, useState } from 'react';
import { Box, Button, Grid } from '@material-ui/core';
import CourseCard from './card';
import firebase from '../firebase';

export default function Summaries() 
{
    const [secondYearCourses, setSecondYearCourses] = useState([]);
    const [thirdYearCourses, setThirdYearCourses] = useState([]);

    useEffect(() => {
        firebase.getAllCourses('Courses').then(setSecondYearCourses);
        firebase.getAllCourses('thirdYearCourses').then(setThirdYearCourses);
        firebase.storage.ref('חומרים שונים').child(`שיעורי חזרה וסיכומים נוספים.zip`)
        .getDownloadURL().then(
            url => {console.log(url);}
        )
    }, []);

    return (
        <div className="summaries-section" id="summaries">
            <h1 className="section-title">הסיכומים שלי</h1>
            <h3 className="section-subtitle">סריקות של הרצאות, תרגולים וסיכומים</h3>
            <h2 className="title">שנה א' וחומרים נוספים</h2>
            <div className="buttons">
                <Button className="button">
                    <a href="https://firebasestorage.googleapis.com/v0/b/path-to-susccess.appspot.com/o/%D7%97%D7%95%D7%9E%D7%A8%D7%99%D7%9D%20%D7%A9%D7%95%D7%A0%D7%99%D7%9D%2F%D7%A2%D7%A8%D7%91%D7%95%D7%91%20%D7%97%D7%95%D7%9E%D7%A8%D7%99%D7%9D%20%D7%A9%D7%9C%20%D7%A9%D7%A0%D7%94%20%D7%90'.zip?alt=media&token=c6bc48db-bf09-49a5-9a3b-460342635f57" download>
                        ערבוב חומרים של שנה א'
                    </a>
                </Button>
                <Button className="button">
                    <a href="https://firebasestorage.googleapis.com/v0/b/path-to-susccess.appspot.com/o/%D7%97%D7%95%D7%9E%D7%A8%D7%99%D7%9D%20%D7%A9%D7%95%D7%A0%D7%99%D7%9D%2F%D7%A9%D7%99%D7%A2%D7%95%D7%A8%D7%99%20%D7%97%D7%96%D7%A8%D7%94%20%D7%95%D7%A1%D7%99%D7%9B%D7%95%D7%9E%D7%99%D7%9D%20%D7%A0%D7%95%D7%A1%D7%A4%D7%99%D7%9D.zip?alt=media&token=8ebdd591-aae2-4c6e-9489-6a092b5693d7" download>
                        שיעורי חזרה וסיכומים נוספים
                    </a>
                </Button>
            </div>
            <h2 className="title">שנה ב'</h2>
            <Grid spacing={3} container direction="row" justify="center" alignItems="stretch">
                {secondYearCourses.map((course, index) =>
                    <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
                        <div className="card-container" key={index}>
                            <CourseCard 
                                name={course.name}
                                semester={course.semester}
                                lecturer={course.lecturer}
                                materials={course.materials}
                                type={course.type}
                                note={course.note} />
                            </div>
                    </Grid>
                )}
            </Grid>
            <Box mt={3}>
                <h2 className="title">שנה ג'</h2>
            </Box>
            <Grid spacing={3} container direction="row" justify="center" alignItems="stretch">
                {thirdYearCourses.map((course, index) =>
                    <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
                        <div className="card-container" key={index}>
                            <CourseCard 
                                name={course.name}
                                semester={course.semester}
                                lecturer={course.lecturer}
                                materials={course.materials}
                                type={course.type}
                                note={course.note} />
                        </div>
                    </Grid>
                )}
            </Grid>
        </div>
    )
}
