import React from 'react';
import FrontPage from './frontpage'
import ManuscriptPage from './manuscriptpage'
import { Switch, Route } from "react-router-dom";



const Routes = () => {
    return (
            <Switch>
                <Route exact path="/" component={FrontPage} />
                <Route path="/manuscript" component={ManuscriptPage} />
            </Switch>
    );
};

export default Routes;