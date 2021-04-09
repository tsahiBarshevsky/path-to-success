import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import firebase from '../firebase';

const useStyles = makeStyles((theme) => ({
    root: 
    {
        width: '100%',
        marginBottom: 10,
        boxShadow: '0 3px 7px -1px rgba(black, 0.1)',
        borderRadius: 10
        // "@media (max-width: 356px)":
        // {
        //     width: 200
        // }
    },
    media: 
    {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: 
    {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(90deg)',
    },
}));

export default function CourseCard(props) 
{
    const classes = useStyles();
    const [expanded, setExpanded] = useState(false);
    const [urls, setUrls] = useState([]);

    useEffect(() => {
        props.materials.map((material) => 
            firebase.storage.ref(props.name).child(`${material}.pdf`)
            .getDownloadURL().then(
                url => {setUrls(oldArray => [...oldArray, url]);}
            )
        );
    }, [props.name, props.materials]);

    const handleExpandClick = () => 
    {
        setExpanded(!expanded);
    };

    return (
        <Card className={classes.root}>
            <CardContent>
                <h2 className="card-title">
                    {props.name} {props.type === 'בחירה' ? '(בחירה)' : null}
                </h2>
                <p className="card-content">
                    <b>מרצה:</b> {props.lecturer}
                    <br />
                    <b>סמסטר:</b> {props.semester}
                </p>
                {props.note !== null ?
                <h6 className="card-note">
                    {props.note}
                </h6>
                : null}
            </CardContent>
            <CardActions disableSpacing>
                <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more">
                    <ExpandMoreIcon />
                </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    {props.materials.map((material, index) =>
                        <div key={index} style={{marginBottom: 2}}>
                            <a href={urls[index]} className="card-link" target="_blank" rel="noreferrer">
                                {material}
                            </a>
                        </div>
                    )}
                </CardContent>
            </Collapse>
        </Card>
    );
}