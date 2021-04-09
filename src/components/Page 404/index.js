import React from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

function Pagr404()
{
    return (
        <div className="full-container">
            <div className="page-container">
                <h1>אופס! אין מה לראות כאן</h1>
                <Button component={Link} to='/' className="button">לדף הבית</Button>
            </div>
        </div>
    )
}

export default Pagr404
