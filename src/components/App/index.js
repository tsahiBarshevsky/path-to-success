import React from 'react';
import './styles.sass';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Homepage from '../Homepage';
import Page404 from '../Page 404';

export default function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Homepage} />
                <Route exact path="*" component={Page404} />
            </Switch>
        </Router>
    )
}