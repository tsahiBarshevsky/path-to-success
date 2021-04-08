import React, { useEffect, useState } from 'react';
import { Box, Grid } from '@material-ui/core';
import CourseCard from './card';
import firebase from '../firebase';

export default function Summaries() 
{
    const [secondYearCourses, setSecondYearCourses] = useState([]);
    const [thirdYearCourses, setThirdYearCourses] = useState([]);

    useEffect(() => {
        firebase.getAllCourses('Courses').then(setSecondYearCourses);
        firebase.getAllCourses('thirdYearCourses').then(setThirdYearCourses);
    }, []);

    return (
        <div className="summaries-section" id="summaries">
            <h1 className="section-title">הסיכומים שלי</h1>
            <h3 className="section-subtitle">סריקות של הרצאות, תרגולים וסיכומים</h3>
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
